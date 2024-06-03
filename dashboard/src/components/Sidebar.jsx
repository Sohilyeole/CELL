import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Dashboard, CalendarToday, Assessment, ViewKanban } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Sidebar = () => (
  <div className="bg-gray-800 text-white w-64 min-h-screen">
    <div className="p-4 text-lg font-bold">Admin Dashboard</div>
    <nav>
      <List>
        <ListItem button component={Link} to="/" className="p-2 hover:bg-gray-700">
          <ListItemIcon><Dashboard className="text-white" /></ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} to="/reports" className="p-2 hover:bg-gray-700">
          <ListItemIcon><Assessment className="text-white" /></ListItemIcon>
          <ListItemText primary="Reports" />
        </ListItem>
        <ListItem button component={Link} to="/calendar" className="p-2 hover:bg-gray-700">
          <ListItemIcon><CalendarToday className="text-white" /></ListItemIcon>
          <ListItemText primary="Calendar" />
        </ListItem>
        <ListItem button component={Link} to="/kanban" className="p-2 hover:bg-gray-700">
          <ListItemIcon><ViewKanban className="text-white" /></ListItemIcon>
          <ListItemText primary="Kanban" />
        </ListItem>
      </List>
    </nav>
  </div>
);

export default Sidebar;

