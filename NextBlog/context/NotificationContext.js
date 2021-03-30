import { createContext, useState, useEffect } from 'react';

const NotificationContext = createContext({
  notification: null,
  showNotification: (notificationData) => {},
  hideNotification: () => {}
})

export const NotificationContextProvider = ({ children }) => {
  const [activeNotification, setActiveNotification] = useState()

  useEffect(() => {
    if (activeNotification && (activeNotification.status === 'success' || activeNotification.status === 'error')) {
      const timer = setTimeout(() => {
        hideNotification()
      }, 3000);

      return () => {
        clearTimeout(timer)
      }
    }
  }, [activeNotification])

  const showNotification = (notificationData) => {
    setActiveNotification(notificationData)
  }

  const hideNotification = () => {
    setActiveNotification(null)
  }

  const context = {
    notification: activeNotification,
    showNotification,
    hideNotification
  }

  return (
    <NotificationContext.Provider value={context}>
      {children}
    </NotificationContext.Provider>
  )
}

export default NotificationContext;