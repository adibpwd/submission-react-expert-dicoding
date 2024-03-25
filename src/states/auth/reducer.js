import { ActionType } from './action';
 
function authReducer(auth = null, action = {}) {
    switch (action.type) {
      case ActionType.SETUSER:
        return action.payload.user;
      case ActionType.UNSETUSER:
        return null;
      default:
        return auth;
    }
  }

  export default authReducer;
