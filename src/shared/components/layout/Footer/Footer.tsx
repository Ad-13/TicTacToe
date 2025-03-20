import React, { FC } from 'react';

import styles from './Footer.module.scss';

const Footer: FC = () => {
  console.log('Footer');

  return <footer className={styles.footer}>Footer</footer>;
};

export default Footer;
