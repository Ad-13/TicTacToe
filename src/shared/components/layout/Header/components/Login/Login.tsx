import React, { FC, useRef } from 'react';

import Button from '@components/general/Button';
import LoginRegisterModal from '@modals/LoginRegisterModal';
import { LoginRegisterModalRef } from '@components/modals/LoginRegisterModal/LoginRegisterModal';

import { useAppSelector } from '@hooks/useAppSelector';

// import styles from './Login.module.scss';

const Login: FC = () => {
  console.log('Login');
  const { pending } = useAppSelector(state => state.auth);
  const ref = useRef<LoginRegisterModalRef>(null);

  const handleLogin = () => ref.current?.handleLogin();

  return (
    <>
      <Button variant="info" onClick={handleLogin} disabled={pending}>
        login
      </Button>

      <LoginRegisterModal ref={ref} />
    </>
  );
};

export default Login;
