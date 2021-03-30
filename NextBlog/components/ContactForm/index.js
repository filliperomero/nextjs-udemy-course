import { useState, useContext } from 'react'

import NotificationContext from '../../context/NotificationContext'

import classes from './styles.module.css'

const ContactForm = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  const { showNotification } = useContext(NotificationContext)

  const handleSubmit = async (event) => {
    event.preventDefault();

    showNotification({
      title: 'Sending message...',
      message: 'Your message is on its way!',
      status: 'pending'
    })

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        name,
        message
      })
    })

    const data = await response.json();

    if (!response.ok) {
      return showNotification({
        title: 'Error',
        message: data.message,
        status: 'error'
      })
    }

    showNotification({
      title: 'Success',
      message: 'Message sent successfully',
      status: 'success'
    })
  }

  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" required value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your name</label>
            <input type="text" id="name" required value={name} onChange={e => setName(e.target.value)} />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea name="message" id="message" rows="5" value={message} onChange={e => setMessage(e.target.value)}></textarea>
        </div>
        <div className={classes.actions}>
          <button type="submit">Send Message</button>
        </div>
      </form>
    </section>
  )
}

export default ContactForm;