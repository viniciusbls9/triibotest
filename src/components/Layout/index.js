import React from 'react';

import ChannelName from '../ChannelName';
import ChannelInfo from '../ChannelInfo';
import ChannelData from '../ChannelData';

import  './styles.css';

function Layout() {
  return (
      <div className="grid">
          <ChannelInfo />
          <ChannelName />
          <ChannelData />
      </div>
  );
}

export default Layout;