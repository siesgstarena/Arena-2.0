import React from 'react';
import { Headline6, Body1 } from '@material/react-typography';
import PropTypes from 'prop-types';
import Button from '@material/react-button';

const ProblemCard = ({
  name, id, points, history, location,
}) => {
  const onProblemNameClick = () => {
    history.push(`${location.pathname}/${id}`);
  };
  const onTestClick = () => {
    history.push(`${location.pathname}/${id}/test`);
  };
  const onEditClick = () => {
    history.push(`${location.pathname}/${id}/edit`);
  };
  const onDeleteClick = () => {
    history.push(`${location.pathname}/${id}/delete`);
  };
  return (
    <div className="ba br4 b--black-20 pa3 mt2">
      <Headline6 className="mt0 mid-gray mb2 pointer dim" onClick={onProblemNameClick}>{name}</Headline6>
      <Body1 className="mid-gray">
        {id}
        &nbsp;
        -
        &nbsp;
        {points}
      </Body1>
      <Button style={{ color: '#555555' }} onClick={onTestClick}>
        Test Problem
      </Button>
      <Button style={{ color: '#555555' }} onClick={onEditClick}>
        Edit Problem
      </Button>
      <Button style={{ color: '#555555' }} onClick={onDeleteClick}>
        Delete Problem
      </Button>
    </div>
  );
};

ProblemCard.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  points: PropTypes.number.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default ProblemCard;
