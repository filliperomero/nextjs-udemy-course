import { useRef } from 'react'

import classes from './styles.module.css';

const ProfileForm = ({ onChangePassword }) => {
  const oldPasswordInputRef = useRef();
  const newPasswordInputRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const oldPassword = oldPasswordInputRef.current.value
    const newPassword = newPasswordInputRef.current.value

    // TODO: add validation
    
    onChangePassword({
      oldPassword,
      newPassword
    })
  }

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' ref={newPasswordInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor='old-password'>Old Password</label>
        <input type='password' id='old-password' ref={oldPasswordInputRef} />
      </div>
      <div className={classes.action}>
        <button button="submit">Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
