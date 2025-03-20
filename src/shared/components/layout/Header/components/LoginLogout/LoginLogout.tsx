import React, { FC } from 'react';

import { useAppSelector } from '@hooks/useAppSelector';

import Login from './../Login';
import Logout from './../Logout';

const LoginLogout: FC = () => {
  console.log('LoginLogout');
  const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated);
  return isAuthenticated ? <Logout /> : <Login />;
};

export default LoginLogout;
