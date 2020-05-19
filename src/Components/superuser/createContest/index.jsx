import React from 'react';
import SuperuserContainer from '../SuperuserContainer';
import CreateContest from './CreateContest';

// SuperuserContainer will check whether the user is superuser or not and
// if the user is admin only then the user will be allowed to see the
// component
const CreateContestPage = () => <SuperuserContainer component={<CreateContest />} />;

export default CreateContestPage;
