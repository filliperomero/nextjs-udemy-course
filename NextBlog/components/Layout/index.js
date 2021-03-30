import { useContext } from 'react'

import MainNavigation from './MainNavigation';
import Notification from '../Ui/Notification'
import NotificationContext from '../../context/NotificationContext'

const Layout = ({ children }) => {
  const notificationCtx = useContext(NotificationContext);

  const activeNotification = notificationCtx.notification;

  return (
    <>
      <MainNavigation />
      <main>{children}</main>
      {activeNotification && (
        <Notification 
          title={activeNotification.title} 
          message={activeNotification.message} 
          status={activeNotification.status} 
        />
      )}
    </>
  )
}

export default Layout