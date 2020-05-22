/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import './AppBar.scss';
import CustomTopAppBar from './CustomTopAppBar';
import 'tachyons';
import CustomDrawer from './CustomDrawer';

const AppBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div>
      {drawerOpen ? <CustomDrawer setDrawerOpen={setDrawerOpen} drawerOpen={drawerOpen} /> : null}
      <CustomTopAppBar setDrawerOpen={setDrawerOpen} />
    </div>
  );
};

export default React.memo(AppBar);
