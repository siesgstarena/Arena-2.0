import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_ALL_CONTEST_DETAILS } from '../../../graphql/queries';
import SomethingWentWrong from '../../common/SomethingWentWrong/index';
import useSessionExpired from '../../../customHooks/useSessionExpired';
import Spinner from '../../common/Spinner/index';
import AllContestPage from './AllContestPage';
import PageCountDisplayer from '../../common/PageCountDisplayer';
import useActivePageState from '../../../customHooks/useAcitvePageState';


const EditcontestContainer = () => {
  const limit = 12;
  const activePageNumber = useActivePageState();
  const { redirectOnSessionExpiredBeforeRender, isSessionExpired } = useSessionExpired();
  const {
    loading, error, data,
  } = useQuery(GET_ALL_CONTEST_DETAILS, {
    variables: { limit, skip: ((activePageNumber - 1) * limit) },
  });

  if (loading) return <Spinner />;
  if (error) return <SomethingWentWrong message="An error has been encountered." />;
  if (data.allContests) {
    const { contests } = data.allContests;
    return (
      <div className="mw7 center pa2">
        <AllContestPage contests={contests} />
        <div className="pt3">
          <PageCountDisplayer
            pageCount={data.allContests.pageCount}
            activePageNumber={activePageNumber}
          />
        </div>
      </div>
    );
  }
  if (isSessionExpired(data.allContests)) {
    // since the component hasn't rendered or returned anything,
    // we use redirectOnSessionExpiredBeforeRender function
    return redirectOnSessionExpiredBeforeRender();
  }
  // case for the user not being admin or superuser
  return <SomethingWentWrong message="An unexpected error has been encountered" />;
};

export default EditcontestContainer;
