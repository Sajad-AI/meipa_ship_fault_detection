import { useState, Fragment } from 'react';
import { Link, useLocation } from 'react-router-dom';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import walletIcon from '../../assets/icons/wallet.svg';
import userListIcon from '../../assets/icons/user-list.svg';
import thermometerIcon from '../../assets/icons/thermometer-half.svg';

function Menu(): JSX.Element {
  const location = useLocation();

  const [menuList, setMenuList] = useState([
    {
      title: 'Main Engine',
      isOpen: true,
      icon: <img src={walletIcon} />,
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
      icon: <img src={userListIcon} />,
      to: '/test'
    },
    {
      title: 'Heat Exchanger',
      icon: <img src={thermometerIcon} />,
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
        <List sx={{ width: '100%', maxWidth: 230, bgcolor: 'background.paper' }} component="nav">
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
