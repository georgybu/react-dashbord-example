import React from 'react';
import './SideMenu.css';

import ExpandableMenu from './ExpandableMenu';
import UserInfo from '../../widgets/user/UserInfo';

const SideMenu = () => {
  // TODO: fill props
  const menu = [
    {
      id: 1, icon: 'fas fa-th-large', title: 'Dashboard', isExpandable: true, expanded: true, children: [
        {id: 11, title: 'Dashboard v.1'},
        {id: 12, title: 'Dashboard v.2'},
        {id: 13, title: 'Dashboard v.3'},
        {id: 14, title: 'Dashboard v.4'},
        {id: 15, title: 'Dashboard v.5'},
      ]
    },
    {id: 1, icon: 'fas fa-th-large', title: 'Layouts', isExpandable: false},
    {id: 1, icon: 'fas fa-th-large', title: 'Graphs', isExpandable: false},
    {id: 1, icon: 'fas fa-th-large', title: 'Mailbox', isExpandable: false},
    {id: 1, icon: 'fas fa-th-large', title: 'Metrics', isExpandable: false},
    {id: 1, icon: 'fas fa-th-large', title: 'Widgets', isExpandable: false},
    {id: 1, icon: 'fas fa-th-large', title: 'Forms', isExpandable: false},
    {id: 1, icon: 'fas fa-th-large', title: 'App views', isExpandable: false},
    {id: 1, icon: 'fas fa-th-large', title: 'Other pages', isExpandable: false},
  ];

  return (
    <div className="side-menu">
      <UserInfo/>

      <div className="expandable-menu expanded">
        <i className="fas fa-th-large"></i>
        Dashboard
        <div className="expandable-menu-list-item">
          d1
        </div>
        <div className="expandable-menu-list-item">
          d2
        </div>
      </div>
      <ExpandableMenu/>
      <ExpandableMenu/>
      <ExpandableMenu/>
      <ExpandableMenu/>
      <ExpandableMenu/>
      <ExpandableMenu/>
    </div>
  );
};

export default SideMenu;
