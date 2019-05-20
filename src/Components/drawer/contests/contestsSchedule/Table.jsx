import React from 'react';
import PropTypes from 'prop-types';

const Table = ({ rows }) => {
  // hidden variable is used to hide the list of setters when the width
  // of the page goes below 900
  const hidden = window.innerWidth < 900;
  return (
    <div className="shadow-4 rounded-corners" style={{ overflowX: 'auto' }}>
      <table className="">
        <tbody className="">
          <tr className="">
            <th>Contest name</th>
            {
              hidden
                ? <th className="pa0" />
                : <th>Setter</th>
            }
            <th>Start</th>
            <th>Duration</th>
            <th>More details</th>
          </tr>
          {rows}
        </tbody>
      </table>
    </div>
  );
};

Table.propTypes = {
  rows: PropTypes.array.isRequired,
};

export default Table;
