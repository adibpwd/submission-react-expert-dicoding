import api from '../../utils/api';

const ActionType = {
    RECEIVE_USERS: 'RECEIVE_USERS',
};

function receiveUsers(users) {
    return {
      type: ActionType.RECEIVE_USERS,
      payload: {
        users,
      },
    };
}

function asyncGetListUsers() {
    return async (dispatch) => {
      try {
        const users = await api.getAllUsers();
   
        dispatch(receiveUsers(users));
      } catch (error) {
        // alert(error.message);
      }
    };
}

export {
    ActionType,
    receiveUsers,
    asyncGetListUsers,
};
