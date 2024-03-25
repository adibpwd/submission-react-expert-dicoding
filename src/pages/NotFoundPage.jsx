import { useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { setIsLoading } from '../states/isPreload/action';

function NotFoundPage() {
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(setIsLoading(false));
  }, [dispatch]);
  
  return (
    <div className="page-container">
      <h1>Halaman tidak di temukan</h1>
    </div>
  );
}

export default NotFoundPage;
