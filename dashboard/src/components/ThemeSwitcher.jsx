import React from 'react';
import { Switch as MuiSwitch } from '@mui/material';

const ThemeSwitcher = ({ darkMode, setDarkMode }) => (
  <div className="flex justify-end p-4">
    <label className="flex items-center cursor-pointer">
      <span className="mr-2 text-gray-700 dark:text-gray-300">Dark Mode</span>
      <MuiSwitch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
    </label>
  </div>
);

export default ThemeSwitcher;
