import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Split from 'react-split';
import './Split.css';
import useResizeWindow from '../../../../customHooks/useResizeWindow';
import ContestPageElement from './ContestPageElement';

const ContestPageSkeleton = ({ children, contestDetails }) => {
  const [parentClassName, setParentClassName] = useState('o-hidden ml-0-5 mr-0-5');
  const width = useResizeWindow();
  const isMobile = width <= 768;
  const ChildrenElement = (
    <ContestPageElement
      isMobile={isMobile}
      parentClassName={parentClassName}
      contestDetails={contestDetails}
      key="ChildrenElement"
    >
      {children}
    </ContestPageElement>
  );

  if (!isMobile) {
    return (
      <Split
        className="split"
        dragInterval={1}
        direction="horizontal"
        cursor="col-resize"
        sizes={[35, 65]}
        minSize={[0, 350]}
        // if drag to left then remove margin
        onDragEnd={(sizes) => {
          if (sizes[0] < 10) {
            setParentClassName('o-hidden ml-0 mr-0');
          } else {
            setParentClassName('o-hidden ml-0-5 mr-0-5');
          }
        }}
      >
        {[ChildrenElement]}
      </Split>
    );
  }
  return ChildrenElement;
};

ContestPageSkeleton.propTypes = {
  children: PropTypes.any.isRequired,
  contestDetails: PropTypes.object.isRequired,
};

export default ContestPageSkeleton;
