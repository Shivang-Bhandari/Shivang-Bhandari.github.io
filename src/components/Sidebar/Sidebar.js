import React from 'react';

import Werewolf from '../../svg/Werewolf';
import Medium from '../../svg/Medium';
import Github from '../../svg/Github';

import './Sidebar.scss';


const Sidebar = () => {
	return (
    <aside className="verticalMenu">
      <section>
        <Werewolf className="verticalMenuIcon" />
      </section>
      <section className="verticalMenuList">
        <a href="https://github.com/Shivang-Bhandari" target="_blank">
          <Github className="verticalMenuIcon" />
        </a>
        <a href="https://medium.com/@shivangbhandari" target="_blank">
          <Medium className="verticalMenuIcon" />
        </a>
      </section>
    </aside>
  );
};

export default Sidebar;

