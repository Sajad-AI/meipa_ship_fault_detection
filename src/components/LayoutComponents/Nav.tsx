import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';

import Menu from './Menu';

const drawerWidth = 240;

type Props = {
  mobileOpen: boolean;
  handleDrawerToggle: (event: {}, reason: 'backdropClick' | 'escapeKeyDown') => void;
};

function Nav({ mobileOpen, handleDrawerToggle }: Props): JSX.Element {
  return (
    <Box component="nav" sx={{ width: { lg: drawerWidth }, flexShrink: { lg: 0 }, marginTop: 2 }}>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true
        }}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' }
        }}
      >
        <Menu />
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', lg: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
        }}
        open
      >
        <Menu />
      </Drawer>
    </Box>
  );
}

export default Nav;
