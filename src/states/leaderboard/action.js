import api from '../../utils/api';

const ActionType = {
    RECEIVE_LEADERBOARDS: 'RECEIVE_LEADERBOARDS',
};

function receiveLeaderboard(leaderboards) {
    return {
      type: ActionType.RECEIVE_LEADERBOARDS,
      payload: {
        leaderboards,
      },
    };
}

function asyncGetListLeaderboards() {
    return async (dispatch) => {
      try {
        const leaderboards = await api.getAllLeaderboards();
   
        dispatch(receiveLeaderboard(leaderboards));
      } catch (error) {
        alert(error.message);
      }
    };
}

export {
    ActionType,
    receiveLeaderboard,
    asyncGetListLeaderboards,
};
