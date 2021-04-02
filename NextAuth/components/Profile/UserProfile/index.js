import ProfileForm from '../ProfileForm';

import classes from './styles.module.css';

const UserProfile = () => {
  // Less elegant way to check if the page should show (if the user has a valid session)
  // const [isLoading, setIsloading] = useState(true);

  // useEffect(() => {
  //   getSession().then(session => {
  //     if (!session) {
  //       window.location.href = '/auth';
  //     } else {
  //       setIsloading(false)
  //     }
  //   })
  // }, [getSession])

  // if (isLoading) {
  //   return <p className={classes.profile}>Loading...</p>
  // }

  const handleChangePassword = async (passwordData) => {
    const response = await fetch('/api/user/change-password', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(passwordData)
    })

    const data = await response.json();

    console.log(data);
  }

  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <ProfileForm onChangePassword={handleChangePassword} />
    </section>
  );
}

export default UserProfile;
