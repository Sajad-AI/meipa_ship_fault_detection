import { Fragment } from 'react';
import { Link, useLocation } from 'react-router-dom';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import routes from '../../routes';

function Menu(): JSX.Element {
  const location = useLocation();

  return (
    <>
      <Toolbar />
      <Box sx={{ overflow: 'auto' }}>
        <List sx={{ width: '100%', bgcolor: 'background.paper' }} component="nav">
          {routes.map((route, index) => {
            return (
              <Fragment key={index}>
                <ListItemButton>
                  <ListItemIcon sx={{ minWidth: '3rem' }}>{route.nav?.icon}</ListItemIcon>
                  <ListItemText primary={route.nav.title} />
                </ListItemButton>
                {route?.children && (
                  <Collapse in={true} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {route.children.map((childRoute, childIndex) => {
                        const fullPath = '/' + route.path + '/' + childRoute.path;
                        return (
                          <ListItemButton
                            key={childIndex}
                            sx={{ pl: 8 }}
                            component={Link}
                            to={fullPath}
                            selected={fullPath === location.pathname}
                          >
                            <ListItemText
                              primary={
                                <Typography variant="subtitle2">{childRoute.nav.title}</Typography>
                              }
                            />
                          </ListItemButton>
                        );
                      })}
                    </List>
                  </Collapse>
                )}
              </Fragment>
            );
          })}
        </List>
      </Box>
    </>
  );
}

export default Menu;
