import { useRef, useContext } from 'react';
import axios from 'axios';

import NotificationContext from '../../../context/NotificationContext'
import classes from './styles.module.css';

const NewsletterRegistration = () => {
  const emailInputRef = useRef(null);
  const { showNotification } = useContext(NotificationContext)

  const handleSubmit = async (event) => {
    event.preventDefault();

    const email = emailInputRef.current.value;

    try {
      showNotification({
        title: 'Signing up...',
        message: 'Registering for newsletter',
        status: 'pending'
      })
      const { data, status } = await axios.post('/api/newsletter', { email })

      showNotification({
        title: 'Success!',
        message: 'Successfully registered for newsletter',
        status: 'success'
      })
    } catch (error) {
      showNotification({
        title: 'Error',
        message: error.response.data.message ? error.response.data.message : 'Something went wrong!',
        status: 'error'
      })
    }
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={handleSubmit}>
        <div className={classes.control}>
          <input
            type='email'
            id='email'
            placeholder='Your email'
            aria-label='Your email'
            ref={emailInputRef}
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;