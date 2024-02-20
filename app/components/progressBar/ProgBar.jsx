// ProgressBar.js

import React, { useEffect, useState } from 'react';
import './ProgBar.css'

const ProgBar = ({ value, label }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => (prevProgress < value ? prevProgress + 1 : value));
    }, 10);

    return () => clearInterval(interval);
  }, [value]);

  return (
    <div style={{ position: 'relative' }}>
      <p className= "lables">{label}</p>
      <progress value={progress} max={100} />
      <p className='pClass'>{`${progress}   % Complete`}</p>
    </div>
  );
};

export default ProgBar;
