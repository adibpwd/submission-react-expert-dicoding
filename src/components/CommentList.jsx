import PropTypes from 'prop-types';

function CommentList({ comments }) {
    return (
      <>
        <h2>Comments: {comments.length}</h2>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {comments.map((comment) => (
            <li key={comment.id} style={{ marginBottom: '10px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
              <p style={{ marginBottom: 2 }}>{comment.content}</p>
              <p style={{
                    marginBottom: '5px', fontStyle: 'italic', fontSize: '.7rem', color: '#666', 
                }}
              >
                <img style={{width: '16px', height: 'auto'}} src={comment.owner.avatar} alt={comment.owner.name} className="avatar" />
                <span style={{ marginBottom: '5px', fontWeight: 'bold' }}>{comment.owner.name}, </span>
                {comment.createdAt}
              </p>
            </li>
          ))}
        </ul>
      </>
    );
}

CommentList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      owner: PropTypes.shape({
        name: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
      }).isRequired,
      createdAt: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default CommentList;
