import api from '../../utils/api';
import { receiveTalksActionCreator } from '../thread/action';
import { receiveUsers } from '../user/action';
import { setIsLoading } from '../isPreload/action';
 
function asyncUserAndThreads() {
  return async (dispatch) => {
    try {
      const threads = await api.getAllThreads();
      const users = await api.getAllUsers();
      
      dispatch(receiveTalksActionCreator(threads));
      dispatch(receiveUsers(users)); 
      setTimeout(() => {
        dispatch(setIsLoading(false));
      }, 1000);
    } catch (error) {
      alert(error.message);
    }
  };
}
 
export default asyncUserAndThreads;
