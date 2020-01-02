import React from 'react';
import { NavLink } from 'react-router-dom';

import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@material-ui/core';

import './Sidebar.css';

import { routes } from '../Routes';

export default function Sidebar() {
  const renderLinks = () => routes.map((route) => (
    <ListItem
      button
      component={NavLink}
      exact={route.exact}
      to={route.path}
      key={`item-${route.path}`}
      activeClassName="Mui-selected"
      divider
    >
      <ListItemIcon>
        <route.icon />
      </ListItemIcon>
      <ListItemText primary={route.label} />
    </ListItem>
  ));

  return (
    <Drawer
      open
      variant="permanent"
      className="Sidebar"
    >
      <List>
        {renderLinks()}
      </List>
    </Drawer>
  );
}
