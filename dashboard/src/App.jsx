import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Routes} from "react-router-dom"


import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import Sidebar from './components/Sidebar.jsx';
import ThemeSwitcher from './components/ThemeSwitcher.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Reports from './pages/Reports.jsx';
import CalendarPage from './pages/CalendarPage.jsx';
import KanbanPage from './KanbanPage.jsx';
import './index.css'; // Ensure Tailwind CSS is imported

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={darkMode ? 'dark' : ''}>
      <Router>
  <div className="flex">
    <Sidebar />
    <main className="flex-grow p-4 bg-gray-100 dark:bg-gray-900 dark:text-white">
      <ThemeSwitcher darkMode={darkMode} setDarkMode={setDarkMode} />
      <Routes>
        <Route path="/" exact  element={<Dashboard/>} />
        
        <Route path='/reports' element={<Reports/>}></Route>
        <Route path='/calendar' element={<CalendarPage/>}></Route>
        <Route path='/kanban' element={<KanbanPage/>}></Route>

       
       
      </Routes>
    </main>
  </div>
</Router>
      </div>
    </ThemeProvider>
  );
};

export default App;
