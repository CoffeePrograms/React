import logo from '/cat.svg';
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import Navbar from './components/Navbar';

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <img src={logo} className="logo" alt="logo" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
