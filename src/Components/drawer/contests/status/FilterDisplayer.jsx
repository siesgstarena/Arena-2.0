import React from 'react';
import PropTypes from 'prop-types';
import { useHistory, useLocation } from 'react-router-dom';
import { Body2 } from '@material/react-typography';
import Button from '@material/react-button';

const FilterDisplayer = ({ problemCode, type, language }) => {
  const history = useHistory();
  const location = useLocation();
  if (problemCode || type || language) {
    return (
      <Body2 className="mid-gray ma0 mt3 mb1">
        Showing results for Problem=
        {problemCode}, Language=
        {language}, Type=
        {type}
        <Button
          onClick={() => {
            // Clearing the search query
            history.push({
              pathname: location.pathname,
              search: '',
            });
          }}
        >
          Clear filters
        </Button>
      </Body2>
    );
  }
  return null;
};

FilterDisplayer.propTypes = {
  problemCode: PropTypes.string,
  type: PropTypes.string,
  language: PropTypes.string,
};

export default FilterDisplayer;
