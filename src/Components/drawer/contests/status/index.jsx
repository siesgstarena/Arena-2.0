import React from 'react';
import FilterSelectors from './FilterSelectors';
import ProblemStatusTable from './ProblemStatusTable';
import 'tachyons';

const Status = () => (
  <div>
    <div className="mb2">
      <FilterSelectors />
    </div>
    <ProblemStatusTable />
  </div>
);

export default Status;
