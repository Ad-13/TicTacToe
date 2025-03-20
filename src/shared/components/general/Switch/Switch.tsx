import React, { FC, useState } from 'react';
import { motion } from 'framer-motion';

import styles from './Switch.module.scss';

const Switch: FC = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => setIsOn(!isOn);

  return (
    <div className={styles.switch} data-is-on={isOn} onClick={toggleSwitch}>
      <motion.div className={styles.handle} layout transition={spring} />
    </div>
  );
};

const spring = {
  type: 'spring',
  stiffness: 700,
  damping: 30,
};

export default Switch;
