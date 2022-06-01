import { MouseEventHandler } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import Logo from './Logo';

type Props = {
  handleDrawerToggle: MouseEventHandler<HTMLButtonElement>;
};

function Header({ handleDrawerToggle }: Props): JSX.Element {
  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 1, display: { lg: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Logo />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
