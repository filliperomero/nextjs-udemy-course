import { useRouter } from 'next/router'

import EventList from '../../components/Events/EventList'
import EventResultsTitle from '../../components/Events/EventResultsTitle'
import Button from '../../components/Ui/Button'
import ErrorAlert from '../../components/Ui/ErrorAlert'

import { getFilteredEvents } from '../../dummy-data'

const FilteredEventsPage = () => {
  const { query } = useRouter();
  const filteredData = query.slug;

  if (!filteredData) {
    return (
      <p className='center'>Loading...</p>
    )
  }

  const [filteredYear, filteredMonth] = filteredData
  
  const year = +filteredYear
  const month = +filteredMonth

  if (isNaN(year) || isNaN(month) || year > 2030 || year < 2020 || month < 1 || month > 12) {
    return (
      <>
        <ErrorAlert>
          <p className='center'>Invalid filter. Please ajust your values</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    )
  }

  const filteredEvents = getFilteredEvents({ year, month })

  if (!filteredEvents || !filteredEvents.length) {
    return (
      <>
        <ErrorAlert>
          <p className='center'>No events found for the chosen filter</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    )
  }

  return (
    <>
      <EventResultsTitle date={new Date(year, month - 1)} />
      <EventList items={filteredEvents} />
    </>
  )
}

export default FilteredEventsPage