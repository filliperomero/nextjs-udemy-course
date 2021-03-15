import Button from '../../../Ui/Button'
import DateIcon from '../../../Icons/DateIcon'
import AddressIcon from '../../../Icons/AddressIcon'
import ArrowRight from '../../../Icons/ArrowRightIcon'

import classes from './styles.module.css'

const EventItem = ({ data }) => {
  const { id, title, date, image, location } = data;

  const readableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  const formattedAddress = location.replace(', ', '\n')

  return (
    <li className={classes.item}>
      <img src={`/${image}`} alt="Event image"/>
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{readableDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={`/events/${id}`}>
            <span>Explore Event</span>
            <span className={classes.icon}><ArrowRight /></span>
          </Button>
        </div>
      </div>
    </li>
  )
}

export default EventItem