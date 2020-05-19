import React from 'react';
import { useParams } from 'react-router-dom';
import AdminContainer from '../AdminContainer';
import ProblemPageContainer from './ProblemPageContainer';

const ProblemPagePage = () => {
  const { contestId } = useParams();
  // AdminContainer will check whether the user is admin or not and
  // if the user is admin only then the user will be allowed to see the
  // component
  return <AdminContainer component={<ProblemPageContainer />} contestCode={contestId} />;
};

export default ProblemPagePage;
