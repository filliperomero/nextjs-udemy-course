import { useState, useEffect } from 'react';
import axios from 'axios';

import CommentList from '../CommentList';
import NewComment from '../NewComment';

import classes from './styles.module.css';

const Comments = ({ eventId }) => {
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (showComments) {
        axios.get(`/api/comments/${eventId}`)
          .then(response => {
            console.log(response.data)
            setComments(response.data.comments)
          })
          .catch(error => console.log(error))
    }
  }, [showComments])

  const toggleCommentsHandler = () => {
    setShowComments((prevStatus) => !prevStatus);
  }

  const handleAddComment = async (commentData) => {
    try {
      const { data } = await axios.post(`/api/comments/${eventId}`, commentData)
    } catch (error) {
      console.log(error.response.data)
    }
  }

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? 'Hide' : 'Show'} Comments
      </button>
      {showComments && <NewComment onAddComment={handleAddComment} />}
      {showComments && <CommentList items={comments} />}
    </section>
  );
}

export default Comments;