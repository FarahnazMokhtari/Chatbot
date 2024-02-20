// ProgressBars.js

import React from 'react';
import ProgBar from './ProgBar';

const ProgBars =  ({ progressArray, labelsArray }) => {
    return (
      <div>
        {progressArray.map((value, index) => (
          <div key={index}>
            <ProgBar value={value} label={labelsArray[index]} />
          </div>
        ))}
      </div>
    );
  };
  
export default ProgBars;
