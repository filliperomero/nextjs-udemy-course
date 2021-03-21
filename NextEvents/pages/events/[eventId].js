import { Fragment } from 'react';

import EventSummary from '../../components/Events/EventSummary'
import EventLogistics from '../../components/Events/EventLogistics'
import EventContent from '../../components/Events/EventContent'
import ErrorAlert from '../../components/Ui/ErrorAlert'

import { getEventById, getAllEvents } from '../../helpers/apiHelper'

const EventDetailPage = ({ event }) => {
  if (!event) {
    return (
      <ErrorAlert>
        <p>No Event Found</p>
      </ErrorAlert>
    )
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title} />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  )
}

export const getStaticProps = async (context) => {
  const eventId = context.params.eventId
  const event = await getEventById(eventId);

  return {
    props: {
      event
    }
  }
}

export const getStaticPaths = async () => {
  const events = await getAllEvents();
  const paths = events.map(event => ({ params: { eventId: event.id }}))

  return {
    paths,
    fallback: false
  }
}

export default EventDetailPage