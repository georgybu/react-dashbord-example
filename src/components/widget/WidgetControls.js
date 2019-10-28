import React from 'react';
import './WidgetControls.css';

const WidgetControls = () => {
  return (
    <div className="widget-controls">
      <button className="collapse">
        <i className="fas fa-chevron-up"/>
      </button>
      <button className="settings">
        <i className="fas fa-wrench"/>
      </button>
      <button className="close">
        <i className="fas fa-times"/>
      </button>
    </div>
  );
};

export default WidgetControls;
