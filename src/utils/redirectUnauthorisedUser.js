/* eslint-disable eqeqeq */
const redirectUnauthorisedUser = (history, setUser, response) => {
  if (response.code == '403' && response.success == false) {
    setUser(null);
    history.push({
      pathname: '/auth/signin',
      state: {
        messageType: 'error',
        message: 'Your session has expired. Please login to continue.',
      },
    });
  }
};

export default redirectUnauthorisedUser;
