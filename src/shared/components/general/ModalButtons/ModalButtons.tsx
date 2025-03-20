import { FC, PropsWithChildren } from 'react';
import classNames from 'classnames';

import styles from './ModalButtons.module.scss';

interface IProps {
  className?: string;
}

const ModalButtons: FC<PropsWithChildren<IProps>> = ({ className, children }) => (
  <div className={classNames(styles.actions, className)}>{children}</div>
);

export default ModalButtons;
