import EventList from '../components/Events/EventList'
import { getFeaturedEvents } from '../dummy-data'

const Home = () => {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  )
}

export default Home
