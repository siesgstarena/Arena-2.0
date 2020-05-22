import React from 'react';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
import Select from '@material/react-select';
import { useQuery } from '@apollo/react-hooks';
import { GET_ALL_CONTEST_NAMES } from '../../../graphql/queries';
import SomethingWentWrong from '../../common/SomethingWentWrong/index';
import useSessionExpired from '../../../customHooks/useSessionExpired';

const SelectingContest = ({ contest, setContest }) => {
  const { redirectOnSessionExpiredBeforeRender, isSessionExpired } = useSessionExpired();
  const onContestChange = (index, item) => setContest(item.getAttribute('data-value'));
  const { loading, error, data } = useQuery(GET_ALL_CONTEST_NAMES, {
    variables: { limit: 150, skip: 0 },
  });
  if (loading) return <Skeleton count={2} />;
  if (error) return <SomethingWentWrong message="An error has been encountered." />;
  if (data.allContests) {
    const { contests } = data.allContests;
    // Converting contestOptions in a format which is supported by Select component
    let contestOptions = contests.map((contestOption) => ({
      value: contestOption.code,
      label: `${contestOption.name} (${contestOption.code})`,
    }));
    contestOptions = [{ value: 'None', label: 'Select Contest' }, ...contestOptions];

    return (
      <>
        <Select
          className="w-100"
          notchedOutlineClassName="pa1"
          enhanced
          outlined
          label="Select Contest"
          value={contest}
          options={contestOptions}
          onEnhancedChange={onContestChange}
        />
      </>
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

SelectingContest.propTypes = {
  contest: PropTypes.string.isRequired,
  setContest: PropTypes.func.isRequired,
};

export default SelectingContest;
