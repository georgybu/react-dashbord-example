import React from 'react';
import './Col.css';

const Col = ({col, children}) => (<div className={'col-' + col}>{children}</div>);

export default Col;
