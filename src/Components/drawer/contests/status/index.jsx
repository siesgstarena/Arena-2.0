import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useParams, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import LoadingTable from '../../../common/LoadingTable/index';
import { GET_SUBMISSION_BY_CONTEST_CODE } from '../../../../graphql/queries';
import SomethingWentWrong from '../../../common/SomethingWentWrong/index';
import useSessionExpired from '../../../../customHooks/useSessionExpired';
import PageCountDisplayer from '../../../common/PageCountDisplayer';
import ProblemStatusTable from './ProblemStatusTable';
import useActivePageState from '../../../../customHooks/useAcitvePageState';
import FilterButton from './FilterButton';
import FilterDisplayer from './FilterDisplayer';
import EmptyData from '../../../common/EmptyData';

const StatusContainer = () => {
  const limit = 15;
  const location = useLocation();
  const searchParams = queryString.parse(location.search);
  const { problemCode, language, type } = searchParams;
  const { contestId } = useParams();
  const activePageNumber = useActivePageState();
  const { redirectOnSessionExpiredBeforeRender, isSessionExpired } = useSessionExpired();
  const { loading, error, data } = useQuery(GET_SUBMISSION_BY_CONTEST_CODE, {
    variables: {
      limit,
      skip: (activePageNumber - 1) * limit,
      contestCode: contestId,
      problemCode,
      language,
      status: type,
    },
    fetchPolicy: 'network-only',
  });
  const tableHeadings = ['#', 'When', 'Who', 'Problem', 'Verdict', 'Language', 'Time', 'Memory'];

  if (loading) return <LoadingTable tableHeadings={tableHeadings} count={50} />;
  if (error) return <SomethingWentWrong message="An error has been encountered." />;
  if (data.submissionsByContestCode) {
    const { submissions, submissionsVisible } = data.submissionsByContestCode;
    const problems = data.problemsByContestCode;
    return (
      <div className="">
        {submissions.length !== 0 ? (
          <div>
            <FilterDisplayer problemCode={problemCode} type={type} language={language} />
            <ProblemStatusTable
              submissions={submissions}
              contestId={contestId}
              submissionsVisible={submissionsVisible}
            />
            <FilterButton
              problems={problems}
              problemCode={problemCode}
              type={type}
              language={language}
            />
            <div className="pt3">
              <PageCountDisplayer
                pageCount={data.submissionsByContestCode.pages}
                activePageNumber={activePageNumber}
              />
            </div>
          </div>
        ) : (
          <EmptyData message="No submissions in the contest yet" />
        )}
      </div>
    );
  }
  if (isSessionExpired(data.submissionsByContestCode)) {
    // since the component hasn't rendered or returned anything,
    // we use redirectOnSessionExpiredBeforeRender function
    return redirectOnSessionExpiredBeforeRender();
  }
  // Random errors
  return <SomethingWentWrong message="An unexpected error has occured" />;
};

export default StatusContainer;
