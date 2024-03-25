import { ActionType } from './action';
 
function threadDetailReducer(threadDetail = null, action = {}) {
    switch (action.type) {
      case ActionType.DETAIL_THREAD:
        return action.payload.threadDetail;
      default:
        return threadDetail;
    }
}

export default threadDetailReducer;
