import { configureStore } from '@reduxjs/toolkit';
import preloadReducer from './isPreload/reducer';
import authReducer from './auth/reducer';
import threadReducer from './thread/reducer';
import threadDetailReducer from './thread_detail/reducer';
import leaderboardReducer from './leaderboard/reducer';
import userReducer from './user/reducer';
 
const store = configureStore({
  reducer: {
    preload: preloadReducer,
    auth: authReducer,
    threads: threadReducer,
    threadDetail: threadDetailReducer,
    leaderboards: leaderboardReducer,
    users: userReducer,
  },
});

export default store;
