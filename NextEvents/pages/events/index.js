import { useRouter } from 'next/router'
import Head from 'next/head'

import EventList from '../../components/Events/EventList'
import EventSearch from '../../components/Events/EventSearch'
import ErrorAlert from '../../components/Ui/ErrorAlert'

import { getAllEvents } from '../../helpers/apiHelper'

const AllEventsPage = ({ events }) => {
  const router = useRouter();

  if (!events.length) {
    return (
      <ErrorAlert>
        <p>No Events to show</p>
      </ErrorAlert>
    )
  }

  const findEventsHandler = ({ year, month }) => {
    router.push(`/events/${year}/${month}`)
  }

  return (
    <>
      <Head>
        <title>NextJS Events</title>
        <meta name="description" content="Find a lot of great events that allow you to evolve." />
      </Head>
      <EventSearch onSearch={findEventsHandler}/>
      <EventList items={events} />
    </>
  )
}

export const getStaticProps = async () => {
  const events = await getAllEvents();

  return {
    props: {
      events
    },
    revalidate: 60
  }
}

export default AllEventsPage