import api from '../../utils/api';

const ActionType = {
    DETAIL_THREAD: 'DETAIL_THREAD',
};

function setDetailThread(threadDetail) {
    return {
      type: ActionType.DETAIL_THREAD,
      payload: {
        threadDetail,
      },
    };
}

function asyncDetailThread({id}) {
    return async (dispatch) => {
      try {
        const detailThread = await api.getDetailThread({id});
        dispatch(setDetailThread(detailThread));
      } catch (error) {
        alert(error.message);
      }
    };
}

function commentThread({ id, content }) {
  return async (dispatch) => {
    try {
      await api.createCommentThread({id, content});
      dispatch(asyncDetailThread({id}));
    } catch (error) {
      alert(error.message);
    }
  };
}

export {
    ActionType,
    setDetailThread,
    asyncDetailThread,
    commentThread,
};
