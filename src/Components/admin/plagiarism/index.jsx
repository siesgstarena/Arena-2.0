import React from 'react';
import { useParams } from 'react-router-dom';
import AdminContainer from '../AdminContainer';
import Plagiarism from './Plagiarism';

const PlagiarismPage = () => {
  const { contestId } = useParams();
  // AdminContainer will check whether the user is admin or not and
  // if the user is admin only then the user will be allowed to see the
  // component
  return (
    <AdminContainer
      component={<Plagiarism />}
      contestCode={contestId}
    />
  );
};

export default PlagiarismPage;
