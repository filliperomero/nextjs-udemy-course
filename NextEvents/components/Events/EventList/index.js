import EventItem from './EventItem'

import classes from './styles.module.css'

const EventList = ({ items }) => {
  return (
    <ul className={classes.list}>
      {items.map(item => (
        <EventItem key={item.id} data={item} />
      ))}
    </ul>
  )
}

export default EventList;