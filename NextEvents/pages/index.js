import EventList from '../components/Events/EventList'
import { getFeaturedEvents } from '../helpers/apiHelper';


const Home = ({ events }) => {
  // const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <EventList items={events} />
    </div>
  )
}

export const getStaticProps = async () => {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents
    }
  }
}

export default Home
