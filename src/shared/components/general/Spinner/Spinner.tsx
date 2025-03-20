import React, { FC, PropsWithChildren } from 'react';
import classnames from 'classnames';

import styles from './Spinner.module.scss';

import Spin from '@images/spin.svg';

interface IProps {
  width?: number;
  className?: string;
}

const Spinner: FC<PropsWithChildren<IProps>> = ({ className, width }) => (
  <img
    className={classnames(styles.spinner, className)}
    style={{ width }}
    alt="spinner"
    src={Spin}
  />
);

export default Spinner;
