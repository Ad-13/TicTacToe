import React, { FC, PropsWithChildren, MouseEvent, ReactNode } from 'react';
import { motion } from 'framer-motion';

import styles from './BgOverlay.module.scss';

interface IProps {
  children: ReactNode;
  onOverlayClick: () => void;
}

const BgOverlay: FC<PropsWithChildren<IProps>> = ({ onOverlayClick, children }) => {
  console.log('BgOverlay');

  const handleOverlayClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) onOverlayClick();
  };

  return (
    <motion.div
      className={styles.modalOverlay}
      onClick={handleOverlayClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default BgOverlay;
