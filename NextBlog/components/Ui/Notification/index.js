import { useContext } from 'react';

import NotificationContext from '../../../context/NotificationContext';

import classes from './styles.module.css';

const Notification = ({ title, message, status }) => {
  const { hideNotification } = useContext(NotificationContext);

  const statusClasses = {
    success: classes.success,
    error: classes.error,
    pending: classes.pending
  }

  const activeClasses = `${classes.notification} ${statusClasses[status]}`;

  return (
    <div className={activeClasses} onClick={hideNotification}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
}

export default Notification;