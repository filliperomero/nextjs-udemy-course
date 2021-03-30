import Head from 'next/head'

import ContactForm from '../components/ContactForm'

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="Send me your message" />
      </Head>
      <ContactForm />
    </>
  )
}

export default Contact;