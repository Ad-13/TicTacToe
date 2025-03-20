import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Button from '@components/general/Button';
import MenuWithBg from '@components/general/MenuWithBg';

import { ERouteNames } from '@enums/ERouteNames';

import styles from './ToggleCatalog.module.scss';

const ToggleCatalog: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log('ToggleCatalog');

  const toggleIsOpen = () => setIsOpen(!isOpen);

  return (
    <>
      <Button onClick={toggleIsOpen}>
        <i className="fa-solid fa-cubes" />
        <span className={styles.txt}>Catalog</span>
      </Button>
      <AnimatePresence>
        {isOpen && (
          <MenuWithBg onOverlayClick={toggleIsOpen}>
            <div className={styles.links} onClick={toggleIsOpen}>
              <Link className={styles.link} to={ERouteNames.CARS}>
                <i className={`fa-solid fa-car-side ${styles.icon}`} />
                <span className={styles.txt}>Cars</span>
              </Link>
              <Link className={styles.link} to={ERouteNames.TIRES}>
                <i className={`fa-solid fa-record-vinyl ${styles.icon}`} />
                <span className={styles.txt}>Tires</span>
              </Link>
            </div>
          </MenuWithBg>
        )}
      </AnimatePresence>
    </>
  );
};

export default ToggleCatalog;
