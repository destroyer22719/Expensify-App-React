const authReducer = (state = {}, action) => {
  switch(action.type) {
    case 'LOGIN':
      return {
        uid: action.uid,
      };
    case 'LOGOUT':
      return {
        ...state,
        uid: undefined,
      };
    default:
      return state;
  }
};

export default authReducer;