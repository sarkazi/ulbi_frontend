import React from 'react';
import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import './styles/index.scss';

import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';

import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', { [theme]: true }, [])}>
      <Link to="/">Главная</Link>
      <Link to="/abount">О</Link>
      <button onClick={toggleTheme}>Change theme</button>
      <Suspense fallback={<div>...loading</div>}>
        <Routes>
          <Route path="abount" element={<AboutPage />} />
          <Route path="" element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
