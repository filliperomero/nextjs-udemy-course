import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import useSWR from 'swr'

import EventList from '../../components/Events/EventList'
import EventResultsTitle from '../../components/Events/EventResultsTitle'
import Button from '../../components/Ui/Button'
import ErrorAlert from '../../components/Ui/ErrorAlert'

const FilteredEventsPage = () => {
  const [loadedEvents, setLoadedEvents] = useState([]);
  const { query } = useRouter();
  const filteredData = query.slug;

  const { data, error } = useSWR(`${process.env.NEXT_PUBLIC_FIREBASE_URL}/events.json`)

  useEffect(() => {
    if (data) {
      const events = []

      for (const key in data) {
        events.push({
          id: key,
          ...data[key]
        })
      }

      setLoadedEvents(events);
    }
  }, [data])

  if (!loadedEvents.length) {
    return (
      <p className='center'>Loading...</p>
    )
  }

  const [filteredYear, filteredMonth] = filteredData
  
  const year = +filteredYear
  const month = +filteredMonth

  if (isNaN(year) || isNaN(month) || year > 2030 || year < 2020 || month < 1 || month > 12 || error) {
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

  const filteredEvents = loadedEvents.filter(event => {
    const eventDate = new Date(event.date);
    return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
  });

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

// export const getServerSideProps = async (context) => {
//   const { params } = context

//   const [filteredYear, filteredMonth] = params.slug

//   const year = +filteredYear
//   const month = +filteredMonth

//   if (isNaN(year) || isNaN(month) || year > 2030 || year < 2020 || month < 1 || month > 12) {
//     return {
//       props: {
//         hasError: true
//       }
//       // notFound: true,
//       // redirect: {
//       //   destination: '/error'
//       // }
//     }
//   }

//   const filteredEvents = await getFilteredEvents({ year, month });

//   return {
//     props: {
//       events: filteredEvents,
//       date: {
//         year,
//         month
//       }
//     }
//   }
// }

export default FilteredEventsPage