import { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { commentThread } from '../states/thread_detail/action';
import { setIsLoading } from '../states/isPreload/action';

function CommentForm({ threadId }) {
  const [commentContent, setCommentContent] = useState('');
  const dispatch = useDispatch();

  const handleCommentChange = (e) => {
    setCommentContent(e.target.value);
  };

  const handleCommentSubmit = () => {
    try {
        dispatch(setIsLoading(true));
        dispatch(commentThread({ id: threadId, content: commentContent }));
        setCommentContent('');
        dispatch(setIsLoading(false));
    } catch (error) {
        console.log(error);
        dispatch(setIsLoading(false));
    }
  };

  return (
    <div className="comment-form">
      <h2>Add a Comment</h2>
      <textarea
        name="commentContent"
        placeholder="Type your comment here..."
        value={commentContent}
        onChange={handleCommentChange}
      />
      <br />
      <button onClick={handleCommentSubmit} type="submit">Submit</button>
    </div>
  );
}

CommentForm.propTypes = {
    threadId: PropTypes.string.isRequired,
};

export default CommentForm;
