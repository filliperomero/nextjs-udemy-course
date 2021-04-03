import { useRouter } from 'next/router';

import Card from '../../Ui/Card';

import classes from './styles.module.css';

const MeetupItem = ({ id, title, image, address }) => {
  const router = useRouter();

  const handleShowDetails = () => {
    router.push(`/${id}`);
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={image} alt={title} />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <address>{address}</address>
        </div>
        <div className={classes.actions}>
          <button type="button" onClick={handleShowDetails}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
