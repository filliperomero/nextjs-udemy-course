import { getSession } from 'next-auth/client'

import AuthForm from '../components/Auth/AuthForm';

const AuthPage = () => {
  return <AuthForm />;
}

export const getServerSideProps = async (context) => {
  const session = await getSession({ req: context.req })

  if (session) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: { session }
  }
}

export default AuthPage;
