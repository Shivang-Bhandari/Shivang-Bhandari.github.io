import React from 'react';

import Werewolf from '../../svg/Werewolf';

import './Sidebar.scss';


const Sidebar = () => {
	return (
    <aside className="verticalMenu">
        <Werewolf className="headerContainer" />
    </aside>
  );
};

export default Sidebar;

