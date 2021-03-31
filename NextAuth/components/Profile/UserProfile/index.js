import ProfileForm from '../ProfileForm';

import classes from './styles.module.css';

const UserProfile = () => {
  // Redirect away if NOT auth

  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <ProfileForm />
    </section>
  );
}

export default UserProfile;
