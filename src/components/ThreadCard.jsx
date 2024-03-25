import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ThreadCard({ thread, user }) {
  return (
    <Link className="thread-card" to={`/thread/detail/${thread.id}`} key={thread.id}>
      <h2 className="thread-card-title">{thread.title}</h2>
      <p className="thread-card-category">{thread.category}</p>
      <p className="thread-card-body">{(thread.body && thread.body.length > 200) ? `${thread.body.slice(0, 200)}...` : thread.body}</p>
      <p className="thread-card-date">Created at: {thread.createdAt}</p>
      <p className="thread-card-date">Total comment : {thread.totalComments}</p>
      {user && (
        <>
          <p className="thread-card-user">Created by: {user.name}</p>
          <img src={user.avatar} alt={user.name} className="thread-card-avatar" />
        </>
      )}
    </Link>
  );
}

ThreadCard.propTypes = {
  thread: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    totalComments: PropTypes.number.isRequired,
  }).isRequired,
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }),
};

export default ThreadCard;
