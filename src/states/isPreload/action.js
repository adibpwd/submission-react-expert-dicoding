const ActionType = {
  SET_LOADING: 'SET_LOADING',
};

function setIsLoading(isLoading) {
    return {
      type: ActionType.SET_LOADING,
      payload: isLoading,
    };
}

// function unsetIsLoading() {
//     return {
//       type: ActionType.IS_LOADING,
//       payload: null,
//     };
// }

export {
    ActionType,
    setIsLoading,
};
