import { FC } from 'react';

import styles from './HamburgerButton.module.scss';

interface IProps {
  className?: string;
  isOpen: boolean;
  onClick: () => void;
}

const HamburgerButton: FC<IProps> = ({ isOpen, className, onClick }) => {
  console.log('HamburgerButton');

  return (
    <button
      className={styles.hamburger + `${className ? ` ${className}` : ''}`}
      data-is-open={isOpen}
      onClick={onClick}
    >
      <span className={styles.bar + ' ' + styles.bar1}></span>
      <span className={styles.bar + ' ' + styles.bar2}></span>
      <span className={styles.bar + ' ' + styles.bar3}></span>
      <span className={styles.bar + ' ' + styles.bar4}></span>
    </button>
  );
};

export default HamburgerButton;
