/* eslint-disable eqeqeq */
const redirectUnauthorisedUser = (history, response) => {
  if (response.code === '403' && response.success === false) {
    // setUser(null);
    history.push({
      pathname: '/auth/signin',
      state: {
        messageType: 'error',
        message: 'Your session has expired. Please login to continue.',
        sessionExpired: true,
      },
    });
  }
};

export default redirectUnauthorisedUser;
