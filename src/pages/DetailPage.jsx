import { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setIsLoading } from '../states/isPreload/action';
import { asyncDetailThread } from '../states/thread_detail/action';
import CommentForm from '../components/CommentForm';
import CommentList from '../components/CommentList';

function DetailPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { auth, threadDetail } = useSelector((states) => ({
    auth: states.auth,
    threadDetail: states.threadDetail,
  }));

  const memoizedAuth = useMemo(() => auth, [auth]);
  const memoizedThreadDetail = useMemo(() => threadDetail, [threadDetail]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(asyncDetailThread({ id }));
        setTimeout(() => {
          dispatch(setIsLoading(false));
        }, 1000);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [dispatch, id]);

  if (!memoizedThreadDetail) {
    return (
      <div className="page-container">
        <h1>Data not found</h1>
      </div>
    );
  }

  return (
    <div className="page-container">
      <h1>Detail Page</h1>
      <div>
        <p style={{display: 'flex', justifyContent: 'right'}}>
          {memoizedThreadDetail.owner.name}
          <img style={{width: '32px', height: 'auto'}} src={memoizedThreadDetail.owner.avatar} alt={memoizedThreadDetail.owner.name} className="avatar" />
        </p>
        <h2>{memoizedThreadDetail.title}</h2>
        <p>{memoizedThreadDetail.body}</p>
        <p>Category: {memoizedThreadDetail.category}</p>
        <p>Created At: {memoizedThreadDetail.createdAt}</p>
        <br />
        <hr />
        <br />
        {memoizedAuth !== null && (
          <CommentForm threadId={id} />
        )}
        <br />
        <hr />
        <br />
        <CommentList comments={memoizedThreadDetail.comments} />
      </div>
    </div>
  );
}

export default DetailPage;
