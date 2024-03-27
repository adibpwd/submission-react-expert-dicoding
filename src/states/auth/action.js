import api from '../../utils/api';

const ActionType = {
    SETUSER: 'SETUSER',
    UNSETUSER: 'UNSETUSER',
};

function setUser(user) {
  return {
    type: ActionType.SETUSER,
    payload: {
      user,
    },
  };
}

function unsetUser() {
  return {
    type: ActionType.UNSETUSER,
    payload: null,
  };
}

function asyncLogin({ email, password }) {
  return async (dispatch) => {
    try {
      const token = await api.login({ email, password });
      api.putAccessToken(token);
      const user = await api.getOwnProfile();
      dispatch(setUser(user));
    } catch (error) {
      alert(error.message);
    }
  };
}

function asyncRegister({ name, email, password }) {
  return async (dispatch) => {
    try {
      const user = await api.register({ name, email, password });
      dispatch(setUser(user));
    } catch (error) {
      dispatch({ type: 'REGISTER_ERROR', payload: error.message });
    }
  };
}

function asyncMyProfile() {
  return async (dispatch) => {
    try {
      const user = await api.getOwnProfile();
 
      dispatch(setUser(user));
    } catch (error) {
      if (error.message === 'Invalid token signature') {
        api.putAccessToken('');
      }
      alert(error.message);
    }
  };
}

function asyncUnsetUser() {
  return (dispatch) => {
    dispatch(unsetUser());
    api.putAccessToken('');
  };
}

export {
    ActionType,
    setUser,
    unsetUser,
    asyncLogin,
    asyncRegister,
    asyncMyProfile,
    asyncUnsetUser,
};
