import Head from 'next/head';

import EventList from '../components/Events/EventList'
import { getFeaturedEvents } from '../helpers/apiHelper';


const Home = ({ events }) => {
  // const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <Head>
        <title>NextJS Events</title>
        <meta name="description" content="Find a lot of great events that allow you to evolve." />
      </Head>
      <EventList items={events} />
    </div>
  )
}

export const getStaticProps = async () => {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents
    },
    revalidate: 1800
  }
}

export default Home
