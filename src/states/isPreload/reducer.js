import { ActionType } from './action';
 
function preloadReducer(isPreload = true, action = {}) {
    switch (action.type) {
      case ActionType.SET_LOADING:
        return action.payload;
      default:
        return isPreload;
    }
}

export default preloadReducer;
