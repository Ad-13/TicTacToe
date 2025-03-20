import React, { forwardRef, useImperativeHandle, useState } from 'react';

import LoginModal from '../LoginModal';
import RegisterModal from '../RegisterModal';

// import styles from './LoginRegisterModal.module.scss';

export type LoginRegisterModalRef = {
  handleLogin: () => void;
};

const LoginRegisterModal = forwardRef<LoginRegisterModalRef>((_props, ref) => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  const handleLogin = () => {
    setIsRegisterModalOpen(false);
    setIsLoginModalOpen(true);
  };

  const handleRegisterClick = () => {
    setIsLoginModalOpen(false);
    setIsRegisterModalOpen(true);
  };

  useImperativeHandle(ref, () => ({
    handleLogin,
  }));

  return (
    <>
      {isLoginModalOpen && (
        <LoginModal
          onClose={() => setIsLoginModalOpen(false)}
          onRegisterClick={handleRegisterClick}
        />
      )}
      {isRegisterModalOpen && (
        <RegisterModal onClose={() => setIsRegisterModalOpen(false)} onLoginClick={handleLogin} />
      )}
    </>
  );
});

LoginRegisterModal.displayName = 'LoginRegisterModal';

export default LoginRegisterModal;
