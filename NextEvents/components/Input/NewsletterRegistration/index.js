import { useRef } from 'react';
import axios from 'axios';

import classes from './styles.module.css';

const NewsletterRegistration = () => {
  const emailInputRef = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const email = emailInputRef.current.value;

    try {
      const { data, status } = await axios.post('/api/newsletter', { email })

    } catch (error) {
      console.log(error.response.data)
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