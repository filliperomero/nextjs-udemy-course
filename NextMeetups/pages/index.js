import Head from 'next/head';

import { findAllDocuments } from '../libs/mongoUtil'
import MeetupList from '../components/Meetups/MeetupList';

const HomePage = ({ meetups }) => {
  return (
    <>
      <Head>
        <title>NextMeetups</title>
        <meta
          name='description'
          content='Browse a huge list of highly active NextMeetups!'
        />
      </Head>
      <MeetupList meetups={meetups} />;
    </>
  );
}

export const getStaticProps = async () => {
  const meetups = await findAllDocuments('meetups')

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        id: meetup._id.toString(),
        title: meetup.title,
        address: meetup.address,
        image: meetup.image
      })),
    },
    revalidate: 1,
  };
}

export default HomePage;