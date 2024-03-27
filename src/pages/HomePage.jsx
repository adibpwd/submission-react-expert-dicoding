import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createThread } from '../states/thread/action';
import asyncUserAndThreads from '../states/shared/action';
import { setIsLoading } from '../states/isPreload/action';
import ThreadForm from '../components/ThreadForm';
import ThreadCard from '../components/ThreadCard';

function HomePage() {
  const {
    threads = [],
    auth = null,
    users = [],
  } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncUserAndThreads());
  }, [dispatch]);

  const handleSubmitThread = async (formData) => {
    try {
      dispatch(setIsLoading(true));
      await dispatch(createThread(formData));
      dispatch(setIsLoading(false));
    } catch (error) {
      console.log(error);
      dispatch(setIsLoading(false));
    }
  };

  return (
    <div className="page-container">
      {auth !== null && (
        <ThreadForm onSubmit={handleSubmitThread} />
      )}
      <br />
      <hr />
      <br />
      <h2>List Thread 1</h2>
      <div className="card-list">
        {threads.map((thread) => <ThreadCard key={thread.id} thread={thread} user={users.find((user) => user.id === thread.ownerId)} />)}
      </div>
    </div>
  );
}

export default HomePage;
