import React, { useState } from 'react';
import PageBlock from './PageBlock';

const PageCountDisplayer = () => {
  const pageCount = 20;
  const [activePageNumber, setActivePageNumber] = useState(5);
  const pageCountDisplayerArray = [];
  let i = 0;
  for (i = 0; i < pageCount; i += 1) {
    pageCountDisplayerArray.push(
      <PageBlock
        key={i + 1}
        pageNumber={i + 1}
        setActivePageNumber={setActivePageNumber}
        activePageNumber={activePageNumber}
      />,
    );
  }
  return (
    <div className="tc">
      {pageCountDisplayerArray}
    </div>
  );
};

export default PageCountDisplayer;
