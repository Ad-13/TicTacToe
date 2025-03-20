import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import useIsAdmin from '@hooks/useIsAdmin';
import { useAppSelector } from '@hooks/useAppSelector';
import { ERouteNames } from '@enums/ERouteNames';

import styles from './Nav.module.scss';

const Nav: FC = () => {
  console.log('Nav');
  const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated);
  const isAdmin = useIsAdmin();

  return (
    <nav className={styles.nav}>
      <Link to={ERouteNames.CHECKOUT}>Checkout</Link>
      {isAdmin && <Link to={ERouteNames.ADMIN}>Admin</Link>}
      {isAuthenticated && <Link to={ERouteNames.CABINET}>CABINET</Link>}
    </nav>
  );
};

export default Nav;
