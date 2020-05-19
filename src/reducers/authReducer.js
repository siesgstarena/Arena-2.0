const authReducer = (state, action) => {
  const now = new Date();
  switch (action.type) {
    case 'LOGIN':
      localStorage.setItem('user', JSON.stringify(action.payload.user));
      // setting the expiry of session for 7 days from now
      localStorage.setItem(
        'sessionExpiry',
        JSON.stringify(now.getTime() + 7 * 24 * 60 * 60 * 1000)
      );
      return {
        ...state,
        user: action.payload.user,
      };
    case 'LOGOUT':
      localStorage.removeItem('user');
      localStorage.removeItem('sessionExpiry');
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export default authReducer;
