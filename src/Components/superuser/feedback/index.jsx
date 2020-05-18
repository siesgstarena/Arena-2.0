import React from 'react';
import SuperuserContainer from '../SuperuserContainer';
import FeedbackContainer from './FeedbackContainer';

// SuperuserContainer will check whether the user is superuser or not and
// if the user is admin only then the user will be allowed to see the
// component
const FeedbackPage = () => (
  <SuperuserContainer
    component={<FeedbackContainer />}
  />
);

export default FeedbackPage;
