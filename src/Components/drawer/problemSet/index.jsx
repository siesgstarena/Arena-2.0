import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import Spinner from '../../common/Spinner/index';
import { GET_PROBLEM_SET } from '../../../graphql/queries';
import SomethingWentWrong from '../../common/SomethingWentWrong/index';
import useSessionExpired from '../../../customHooks/useSessionExpired';
import ProblemSet from './ProblemSet';

const ProblemSetContainer = () => {
  const { redirectOnSessionExpiredBeforeRender, isSessionExpired } = useSessionExpired();
  const {
    loading, error, data,
  } = useQuery(GET_PROBLEM_SET);
  if (loading) return <Spinner />;
  if (error) return <SomethingWentWrong message="An error has been encountered." />;
  if (data.problemSet) {
    const problems = data.problemSet;
    return (
<<<<<<< HEAD

      <div className="mw7 pa2">

        <div className="mw7 center">
          <ProblemSet
            problems={problems}
          />
        </div>
=======
      <div className="mw7 center">
        <ProblemSet
          problems={problems}
        />
>>>>>>> 287de2545b12efaa2bb994b7f928aac295dcf8d2
      </div>
    );
  }
  if (isSessionExpired(data.problemSet)) {
    // since the component hasn't rendered or returned anything,
    // we use redirectOnSessionExpiredBeforeRender function
    return redirectOnSessionExpiredBeforeRender();
  }
  // Random errors
  return <SomethingWentWrong message="An unexpected error has occured" />;
};

export default ProblemSetContainer;
