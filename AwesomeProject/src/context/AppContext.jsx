import React, { createContext, useContext, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppContextProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const themeIcon = isDarkMode
    ? <Ionicons name="sunny" size={24} color="white" />
    : <Ionicons name="md-moon" size={24} color="white" />

  return (
    <AppContext.Provider value={{ isDarkMode, toggleTheme, themeIcon }}>
      {children}
    </AppContext.Provider>
  );
};
