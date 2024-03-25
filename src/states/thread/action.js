import api from '../../utils/api';

const ActionType = {
    RECEIVE_THREADS: 'RECEIVE_THREADS',
};

function receiveTalksActionCreator(threads) {
    return {
      type: ActionType.RECEIVE_THREADS,
      payload: {
        threads,
      },
    };
}

function asyncGetListThreads() {
    return async (dispatch) => {
      try {
        const threads = await api.getAllThreads();
   
        dispatch(receiveTalksActionCreator(threads));
      } catch (error) {
        alert(error.message);
      }
    };
}

function createThread({ title, body, category }) {
    return async (dispatch) => {
      try {
        await api.createThread({title, body, category});
        dispatch(asyncGetListThreads());
      } catch (error) {
        alert(error.message);
      }
    };
}

export {
    ActionType,
    receiveTalksActionCreator,
    asyncGetListThreads,
    createThread,
};
