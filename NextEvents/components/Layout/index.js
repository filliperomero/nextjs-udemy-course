import { useContext } from 'react'

import Header from './Header'
import Notification from '../Ui/Notification'
import NotificationContext from '../../context/NotificationContext'

const Layout = ({ children }) => {
  const notificationCtx = useContext(NotificationContext);

  const activeNotification = notificationCtx.notification;

  return (
    <>
      <Header />
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

export default Layout;