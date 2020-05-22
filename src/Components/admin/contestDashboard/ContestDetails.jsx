import React from 'react';
import { Link, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Body1, Headline5 } from '@material/react-typography';
import { convertDate, convertTime } from '../../../commonFunctions';

const ContestDetails = ({ contest }) => {
  const { contestId } = useParams();
  let startsAtDate = 'Loading...';
  let endsAtDate = 'Loading...';
  let startsAtTime = 'Loading...';
  let endsAtTime = 'Loading...';
  // Checking whether the startsAt and endsAt time are not the loading values.
  // If they are loading values then we won't pass them to our convert functions.
  startsAtDate = convertDate(contest.startsAt);
  startsAtTime = convertTime(contest.startsAt);
  endsAtDate = convertDate(contest.endsAt);
  endsAtTime = convertTime(contest.endsAt);

  return (
    <div className="">
      <Headline5 className="mt3 mb3 mid-gray">
        <Link to={`/contests/${contestId}`} className="no-underline blue dim">
          {contest.name}
        </Link>
      </Headline5>
      <Body1 className="ma0 mid-gray">
        Starts on: &nbsp;
        {startsAtDate}, &nbsp;
        {startsAtTime}
      </Body1>
      <Body1 className="ma0 mid-gray">
        Ends on: &nbsp;
        {endsAtDate}, &nbsp;
        {endsAtTime}
      </Body1>
    </div>
  );
};

ContestDetails.propTypes = {
  contest: PropTypes.object.isRequired,
};

export default React.memo(ContestDetails);
