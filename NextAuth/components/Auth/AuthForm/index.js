import { useState, useRef } from 'react';
import { signIn } from 'next-auth/client';
import { useRouter } from 'next/router'

import classes from './styles.module.css';

const createUser = async (email, password) => {
  const response = await fetch('/api/auth/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong')
  }

  return data;
}

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const router = useRouter();

  const handleSwitchAuth = () => {
    setIsLogin((prevState) => !prevState);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const email = emailInputRef.current.value
    const password = passwordInputRef.current.value

    if (isLogin) {
      const result = await signIn('credentials', { redirect: false, email, password })
      if (!result.error) {
        return router.replace('/profile')
      }
      console.log(result)
      return;
    }

    // TODO: Add validation
    try {
      const user = await createUser(email, password)
      console.log(user)

    } catch (error) {
      console.log(error)
    }

  }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={handleSubmit}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' required ref={passwordInputRef} />
        </div>
        <div className={classes.actions}>
          <button>{isLogin ? 'Login' : 'Create Account'}</button>
          <button
            type='button'
            className={classes.toggle}
            onClick={handleSwitchAuth}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
}

export default AuthForm;
