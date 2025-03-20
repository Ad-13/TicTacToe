import { FC, PropsWithChildren, ReactNode } from 'react';
import { motion } from 'framer-motion';

import BgOverlay from '@components/general/BgOverlay';

import styles from './Drawer.module.scss';

interface IProps {
  children: ReactNode;
  onOverlayClick: () => void;
}

const Drawer: FC<PropsWithChildren<IProps>> = ({ children, onOverlayClick }) => {
  console.log('Drawer');

  return (
    <BgOverlay onOverlayClick={onOverlayClick}>
      <motion.div
        className={styles.drawer}
        initial={{ translateX: '-100%' }}
        animate={{ translateX: 0 }}
        exit={{ translateX: '-100%' }}
        transition={spring}
      >
        {children}
      </motion.div>
    </BgOverlay>
  );
};

const spring = {
  type: 'spring',
  stiffness: 700,
  damping: 30,
};

export default Drawer;
