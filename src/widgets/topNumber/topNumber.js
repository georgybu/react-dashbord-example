import React from 'react';
import './topNumber.css';

const TopNumber = () => {
  return (
    <div className="top-number">
      <div className="value">
        40 886,200
      </div>
      <div className="label">
        <span>Total income</span>
        <div className="movement">
          98% S
        </div>
      </div>
    </div>
  );
};

export default TopNumber;
