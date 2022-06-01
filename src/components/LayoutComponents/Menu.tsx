import { useState, Fragment } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ChevronLeft from '@mui/icons-material/ChevronLeft';

function Menu(): JSX.Element {
  const location = useLocation();

  const [menuList, setMenuList] = useState([
    {
      title: 'Main Engine',
      isOpen: true,
      icon: <SendIcon />,
      to: '/main-engine',
      children: [
        {
          title: 'Real Time Monitoring',
          to: '/real-time-monitoring'
        },
        {
          title: 'M/E Fault Detect',
          to: '/fault-detection'
        },
        {
          title: 'Fault Diagnosis',
          to: '/fault-diagnosis'
        }
      ]
    },
    {
      title: 'Gen Engine',
      icon: <SendIcon />,
      to: '/test'
    },
    {
      title: 'Heat Exchanger',
      icon: <SendIcon />,
      isOpen: false,
      to: '/test',
      children: [
        {
          title: 'Real Time Monitoring',
          to: '/real-time-monitoring'
        },
        {
          title: 'M/E Fault Detect',
          to: '/fault-detection'
        },
        {
          title: 'Fault Diagnosis',
          to: '/fault-diagnosis'
        }
      ]
    },
    {
      title: 'Reports',
      to: 'test',
      icon: <SendIcon />
    }
  ]);

  // const handleToggleOpen = (index: any) => {
  //   const copyMenu = [...menuList];
  //   copyMenu[index].isOpen = !copyMenu[index].isOpen;
  //   setMenuList(copyMenu);
  // };

  return (
    <>
      <Toolbar />
      <Box sx={{ overflow: 'auto' }}>
        <List
          sx={{ width: '100%', maxWidth: 230, bgcolor: 'background.paper' }}
          component="nav"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              <Button>
                <ChevronLeft />
                Collapse panel
              </Button>
            </ListSubheader>
          }
        >
          {menuList.map((menuItem, index) => {
            return (
              <Fragment key={index}>
                <ListItemButton
                  component={Link}
                  to={menuItem.to}
                  selected={menuItem.to === location.pathname}
                >
                  <ListItemIcon sx={{ minWidth: '3rem' }}>{menuItem.icon}</ListItemIcon>
                  <ListItemText primary={menuItem.title} />
                  {menuItem?.children && (menuItem.isOpen ? <ExpandLess /> : <ExpandMore />)}
                </ListItemButton>
                {menuItem?.children && (
                  <Collapse in={menuItem.isOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {menuItem.children.map((itemChild, childIndex) => {
                        return (
                          <ListItemButton
                            key={childIndex}
                            sx={{ pl: 8 }}
                            component={Link}
                            to={itemChild.to}
                            selected={itemChild.to === location.pathname}
                          >
                            <ListItemText
                              primary={
                                <Typography variant="subtitle2">{itemChild.title}</Typography>
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
