import { Fragment } from 'react';
import { useRouter } from 'next/router';

import EventSummary from '../../components/Events/EventSummary'
import EventLogistics from '../../components/Events/EventLogistics'
import EventContent from '../../components/Events/EventContent'
import ErrorAlert from '../../components/Ui/ErrorAlert'

import { getEventById } from '../../dummy-data'

const EventDetailPage = () => {
  const { query } = useRouter();

  const eventId = query.eventId;
  const event = getEventById(eventId);

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

export default EventDetailPage