import { ObjectId } from 'mongodb';
import Head from 'next/head';

import { findAllDocuments, findOneDocument } from '../../libs/mongoUtil'
import MeetupDetail from '../../components/Meetups/MeetupDetail';

const MeetupDetails = ({ meetupData }) => {
  const { title, description, image, address } = meetupData;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
      </Head>
      <MeetupDetail
        image={image}
        title={title}
        address={address}
        description={description}
      />
    </>
  );
}

export const getStaticPaths = async () => {
  const meetups = await findAllDocuments('meetups', {}, { _id: 1 })

  return {
    fallback: 'blocking',
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

export const getStaticProps = async (context) => {
  const { meetupId } = context.params;

  const selectedMeetup = await findOneDocument('meetups', { _id: ObjectId(meetupId) })
  
  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description,
      },
    },
  };
}

export default MeetupDetails;
