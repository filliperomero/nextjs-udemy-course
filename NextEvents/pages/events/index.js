import { useRouter } from 'next/router'

import EventList from '../../components/Events/EventList'
import EventSearch from '../../components/Events/EventSearch'
import ErrorAlert from '../../components/Ui/ErrorAlert'

import { getAllEvents } from '../../dummy-data'

const AllEventsPage = () => {
  const router = useRouter();
  const events = getAllEvents();

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
      <EventSearch onSearch={findEventsHandler}/>
      <EventList items={events} />
    </>
  )
}

export default AllEventsPage