import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import ThemeSwitcher from '@components/general/ThemeSwitcher';
import ToggleDrawer from '@components/general/ToggleDrawer';
import Nav from './components/Nav';
import ToggleCatalog from './components/ToggleCatalog';
import LoginLogout from './components/LoginLogout';
import CartButton from './components/CartButton';

import { useAppSelector } from '@hooks/useAppSelector';

import styles from './Header.module.scss';

const Header: FC = () => {
  console.log('Header');
  const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated);

  return (
    <header className={styles.header}>
      <ToggleDrawer />
      <div className={styles.logo}>
        <Link to="/">AutoStore</Link>
      </div>
      <ToggleCatalog />
      <Nav />
      <div className={styles.userControls}>
        {isAuthenticated && <CartButton />}
        <ThemeSwitcher />
        <LoginLogout />
      </div>
    </header>
  );
};

export default Header;
