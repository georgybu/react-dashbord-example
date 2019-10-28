import React from 'react';
import './WidgetBadgeTitle.css'
import Badge from '../../widgets/badge/badge';

const WidgetBadgeTitle = () => {
  return (
    <div className="widget-badge-title">
      <span>Income</span>
      <Badge />
    </div>
  );
};

export default WidgetBadgeTitle;
