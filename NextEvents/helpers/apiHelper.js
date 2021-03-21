  import axios from 'axios';

  export const getAllEvents = async () => {
    const { data } = await axios.get(`${process.env.FIREBASE_URL}/events.json`)

    const events = []

    for (const key in data) {
      events.push({
        id: key,
        ...data[key]
      })
    }

    return events;
  }

  export const getFeaturedEvents = async () => {
    const allEvents = await getAllEvents();

    return allEvents.filter(event => event.isFeatured);
  }

  export const getEventById = async (id) => {
    const allEvents = await getAllEvents();

    return allEvents.find(event => event.id === id);
  }