import React from 'react';
import { Link, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Body1, Headline5 } from '@material/react-typography';

const ContestDetails = ({ contest }) => {
  const { contestId } = useParams();
  return (
    <div className="">
      <Headline5 className="mt3 mb3 mid-gray">
        <Link to={`/contests/${contestId}`} className="no-underline blue dim">
          {contest.name}
        </Link>
      </Headline5>
      <Body1 className="ma0 mid-gray">
      Starts on:
      &nbsp;
        {String(new Date(Number(contest.startsAt)))}
      </Body1>
      <Body1 className="ma0 mid-gray">
      Ends on:
      &nbsp;
        {String(new Date(Number(contest.endsAt)))}
      </Body1>
    </div>
  );
};

ContestDetails.propTypes = {
  contest: PropTypes.object.isRequired,
};

export default ContestDetails;
