import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useParams } from 'react-router-dom';
import { Headline4, Body1 } from '@material/react-typography';
import ResetSubmissionTable from './ResetSubmissionTable';
import Spinner from '../../common/Spinner/index';
import { GET_RESET_SUBMISSION_DETAILS } from '../../../graphql/queries';
import SomethingWentWrong from '../../common/SomethingWentWrong/index';
import useSessionExpired from '../../../customHooks/useSessionExpired';
import PageCountDisplayer from '../../common/PageCountDisplayer';

const ResetSubmissionStatus = () => {
  const { contestId, problemId } = useParams();
  const [activePageNumber, setActivePageNumber] = useState(1);
  const { redirectOnSessionExpiredBeforeRender, isSessionExpired } = useSessionExpired();
  const {
    loading, error, data, fetchMore, networkStatus,
  } = useQuery(GET_RESET_SUBMISSION_DETAILS, {
    variables: { contestCode: contestId, problemCode: problemId, limit: 15 },
    notifyOnNetworkStatusChange: true,
  });
  const onLoadMore = (amountOfEntiresToBeSkipped) => {
    // console.log(amountOfEntiresToBeSkipped);
    fetchMore({
      variables: {
        skip: amountOfEntiresToBeSkipped,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        // console.log(prev, fetchMoreResult);
        if (!fetchMoreResult) return prev;
        // return { submissionsByContestCode: prev };
        return Object.assign({}, prev, fetchMoreResult);
      },
    });
  };
  if (networkStatus === 3) return <Spinner />;
  if (loading) return <Spinner />;
  if (error) return <SomethingWentWrong message="An error has been encountered." />;
  if (data.submissionsByContestCode) {
    const response = data.submissionsByContestCode.submissions;
    // console.log(response);
    return (
      <div className="pl5-ns pr5-ns pl2 pr2">
        <Headline4 className="purple mb0">Update Submission Status</Headline4>
        <Body1 className="mt2">
          Problem:
          &nbsp;
          {problemId}
          &nbsp;
          -
          &nbsp;
          {response[0].problemId.name}
        </Body1>
        <ResetSubmissionTable resetSubmissionTableData={response} />
        <PageCountDisplayer
          pageCount={data.submissionsByContestCode.pages}
          onLoadMore={onLoadMore}
          activePageNumber={activePageNumber}
          setActivePageNumber={setActivePageNumber}
        />
      </div>
    );
  }
  if (isSessionExpired(data.submissionsByContestCode)) {
    // since the component hasn't rendered or returned anything,
    // we use redirectOnSessionExpiredBeforeRender function
    return redirectOnSessionExpiredBeforeRender();
  }
  // case for the user not being admin or superuser
  return <SomethingWentWrong message="An unexpected error has occured" />;
};

export default ResetSubmissionStatus;
