import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { asyncGetListUsers } from '../states/user/action';
import { setIsLoading } from '../states/isPreload/action';

function ListUserPage() {
  const [displayedUsers, setDisplayedUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;
  const {
    users = [],
  } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // dispatch(setIsLoading(true));
        await dispatch(asyncGetListUsers());
        setTimeout(() => {
          dispatch(setIsLoading(false));
        }, 1000);
      } catch (error) {
        console.log(error);
      }
    };
    
    if (users.length === 0) fetchData();

    const startIndex = (currentPage - 1) * usersPerPage;
    const endIndex = startIndex + usersPerPage;
    setDisplayedUsers(users.slice(startIndex, endIndex));
  }, [dispatch, users, currentPage]);

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(1, prevPage - 1));
  };

  const goToNextPage = () => {
    const lastPage = Math.ceil(users.length / usersPerPage);
    setCurrentPage((prevPage) => Math.min(lastPage, prevPage + 1));
  };

  return (
    <div className="page-container">
      <h1>All User Page</h1>
      <ul className="user-list">
        {displayedUsers.map((user) => (
          <li key={user.id} className="user-item">
            <img src={user.avatar} alt={user.name} className="avatar" />
            <div className="user-info">
              <h2 className="user-name">{user.name}</h2>
              <p className="user-email">{user.email}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className="pagination">
        <button type="button" onClick={goToPreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        {Array.from({ length: Math.ceil(users.length / usersPerPage) }, (_, index) => (
          <button key={index + 1} onClick={() => setCurrentPage(index + 1)} className={currentPage === index + 1 ? 'active' : ''}>
            {index + 1}
          </button>
        ))}
        <button onClick={goToNextPage} disabled={currentPage === Math.ceil(users.length / usersPerPage)}>
          Next
        </button>
      </div>
    </div>
  );
}

export default ListUserPage;
