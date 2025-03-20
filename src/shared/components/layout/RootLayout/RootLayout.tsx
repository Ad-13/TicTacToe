import React, { FC, memo } from 'react';
import { Outlet } from 'react-router-dom';

import Footer from '@components/layout/Footer';
import Header from '@components/layout/Header';

import styles from './RootLayout.module.scss';

const RootLayout: FC = () => {
  console.log('RootLayout');

  return (
    <>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default memo(RootLayout);
