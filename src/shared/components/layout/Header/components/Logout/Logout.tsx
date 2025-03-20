import React, { FC } from 'react';

import * as authThunks from '@reducers/auth/thunks';

import Button from '@components/general/Button';

import useActions from '@hooks/useActions';
import { useAppSelector } from '@hooks/useAppSelector';

// import styles from './Logout.module.scss';

const Logout: FC = () => {
  console.log('Logout');
  const { logout } = useActions(authThunks);
  const { pending } = useAppSelector(state => state.auth);

  const handleLogout = () => {
    logout();
  };

  return (
    <Button variant="secondary" onClick={handleLogout} pending={pending}>
      logout
    </Button>
  );
};

export default Logout;
