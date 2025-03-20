import { FC, useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import Drawer from '@components/general/Drawer';
import HamburgerButton from '@components/general/HamburgerButton';

import styles from './ToggleDrawer.module.scss';

const ToggleDrawer: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => setIsOpen(!isOpen);

  return (
    <>
      <HamburgerButton className={styles.hamburger} isOpen={isOpen} onClick={toggleIsOpen} />
      <AnimatePresence>
        {isOpen && (
          <Drawer onOverlayClick={toggleIsOpen}>
            <span className={styles.close} onClick={toggleIsOpen}>
              <i className="fa-regular fa-circle-xmark" />
            </span>
            test
          </Drawer>
        )}
      </AnimatePresence>
    </>
  );
};

export default ToggleDrawer;
