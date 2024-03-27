import api from '../../utils/api';

const ActionType = {
    RECEIVE_THREADS: 'RECEIVE_THREADS',
    GET_THREADS_ERROR: 'GET_THREADS_ERROR',
};

function receiveThreadsActionCreator(threads) {
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
   
        dispatch(receiveThreadsActionCreator(threads));
      } catch (error) {
        dispatch({ type: ActionType.GET_THREADS_ERROR, payload: error.message });
      }
    };
}

function createThread({ title, body, category }) {
    return async (dispatch) => {
      try {
        await api.createThread({title, body, category});
        dispatch(asyncGetListThreads());
      } catch (error) {
        dispatch({ type: ActionType.CREATE_THREAD_ERROR, payload: error.message });
      }
    };
}

export {
    ActionType,
    receiveThreadsActionCreator,
    asyncGetListThreads,
    createThread,
};
