import { FC, MouseEventHandler, PropsWithChildren, ReactNode } from 'react';
import { motion } from 'framer-motion';

import BgOverlay from '@components/general/BgOverlay';

import styles from './MenuWithBg.module.scss';

interface IProps {
  children: ReactNode;
  onOverlayClick: () => void;
}

const MenuWithBg: FC<PropsWithChildren<IProps>> = ({ children, onOverlayClick }) => {
  console.log('MenuWithBg');

  const onMenuClick: MouseEventHandler<HTMLDivElement> = event => event.stopPropagation();

  return (
    <BgOverlay onOverlayClick={onOverlayClick}>
      <div className={styles.menuWrapper} onClick={onOverlayClick}>
        <motion.div
          className={styles.menu}
          initial={{ translateY: '-100%' }}
          animate={{ translateY: 0 }}
          exit={{ translateY: '-100%' }}
          transition={spring}
          onClick={onMenuClick}
        >
          {children}
        </motion.div>
      </div>
    </BgOverlay>
  );
};

const spring = {
  type: 'spring',
  stiffness: 700,
  damping: 30,
};

export default MenuWithBg;
