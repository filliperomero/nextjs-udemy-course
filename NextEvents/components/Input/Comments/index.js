import { useState, useEffect, useContext } from 'react';
import axios from 'axios';

import CommentList from '../CommentList';
import NewComment from '../NewComment';
import NotificationContext from '../../../context/NotificationContext'

import classes from './styles.module.css';

const Comments = ({ eventId }) => {
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const { showNotification } = useContext(NotificationContext);

  useEffect(() => {
    if (showComments) {
      setLoading(true);
      axios.get(`/api/comments/${eventId}`)
        .then(response => {
          setComments(response.data.comments)
        })
        .catch(error => console.log(error))
        .finally(() => {
          setLoading(false)
        })
    }
  }, [showComments])

  const toggleCommentsHandler = () => {
    setShowComments((prevStatus) => !prevStatus);
  }

  const handleAddComment = async (commentData) => {
    showNotification({
      title: 'Sending comment...',
      message: 'Your comment is currently being stored into a database',
      status: 'pending'
    })
    try {
      const { data } = await axios.post(`/api/comments/${eventId}`, commentData)
      setComments(state => [...state, data.comment])
      showNotification({
        title: 'Success',
        message: 'Your comment was saved',
        status: 'success'
      })
    } catch (error) {
      showNotification({
        title: 'Error',
        message: error.response.data.message ? error.response.data.message : 'Something went wrong!',
        status: 'error'
      })
    }
  }

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? 'Hide' : 'Show'} Comments
      </button>
      {showComments && <NewComment onAddComment={handleAddComment} />}
      {showComments && !loading && <CommentList items={comments} />}
      {showComments && loading && <p>Loading...</p>}
    </section>
  );
}

export default Comments;