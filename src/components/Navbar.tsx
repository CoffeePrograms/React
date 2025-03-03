import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';

const Navbar: React.FC = () => {
  return (
    <nav className={`${styles.nav} fixed-top shadow`}>
      <ul>
        <li>
          <Link to="/">Главная</Link>
        </li>
        <li>
          <Link to="/login">Вход</Link>
        </li>
        <li>
          <Link to="/register">Регистрация</Link>
        </li>
        <li>
          <Link to="/no_way">Не нажимать</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
