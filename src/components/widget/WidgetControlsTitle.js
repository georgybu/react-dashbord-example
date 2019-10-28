import React from 'react';
import './WidgetControlsTitle.css';

import WidgetControls from './WidgetControls';

const WidgetControlsTitle = () => {
  return (
    <div className="widget-controls-title">
      <span>WidgetTitle</span>
      <WidgetControls/>
    </div>
  );
};

export default WidgetControlsTitle;
