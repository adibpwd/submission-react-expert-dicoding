import { ActionType } from './action';
 
function threadReducer(threads = [], action = {}) {
    switch (action.type) {
      case ActionType.RECEIVE_THREADS:
        return action.payload.threads;
      default:
        return threads;
    }
}

export default threadReducer;
