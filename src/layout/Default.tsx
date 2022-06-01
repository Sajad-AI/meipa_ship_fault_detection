import { useState, MouseEventHandler } from 'react';
import { Routes, Route } from 'react-router-dom';
import Box from '@mui/material/Box';

import Header from '../components/LayoutComponents/Header';
import Main from '../components/LayoutComponents/Main';
import Nav from '../components/LayoutComponents/Nav';

import routes from '../routes';

function DefaultLayout(): JSX.Element {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Header handleDrawerToggle={handleDrawerToggle as MouseEventHandler<HTMLButtonElement>} />
      <Nav
        handleDrawerToggle={
          handleDrawerToggle as (event: {}, reason: 'backdropClick' | 'escapeKeyDown') => void
        }
        mobileOpen={mobileOpen}
      />
      <Routes>
        {routes.map((route, index) => {
          return <Route key={index} path={route.path} element={<Main {...route} />} />;
        })}
      </Routes>
    </Box>
  );
}

export default DefaultLayout;
