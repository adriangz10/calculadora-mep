import React from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const DarkModeToggle = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <DarkModeSwitch
      checked={isDarkMode}
      onChange={toggleDarkMode}
      size={30}
    />
  );
};

export default DarkModeToggle;