import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { asyncGetListLeaderboards } from '../states/leaderboard/action';
import { setIsLoading } from '../states/isPreload/action';

function LeaderboardPage() {
  const { leaderboards } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // dispatch(setIsLoading(true));
        await dispatch(asyncGetListLeaderboards());
        setTimeout(() => {
          dispatch(setIsLoading(false));
        }, 1000);
      } catch (error) {
        console.log(error);
      }
    };
  
    fetchData();
  }, [dispatch]);

  return (
    <div className="page-container">
      <h1>Leaderboard</h1>
      <div className="card-list">
        {leaderboards.map((leaderboard) => (
          <div className="leaderboard-card" key={leaderboard.user.id}>
            <img src={leaderboard.user.avatar} alt={leaderboard.user.name} className="avatar" />
            <div className="leaderboard-user-info">
              <h2 className="leaderboard-user-name">{leaderboard.user.name}</h2>
              <p className="leaderboard-user-email">{leaderboard.user.email}</p>
            </div>
            <p className="leaderboard-user-score">Score: {leaderboard.score}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LeaderboardPage;
