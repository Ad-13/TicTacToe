import React, { FC, PropsWithChildren } from 'react';
import classNames from 'classnames';

import Spinner from '@components/general/Spinner';

import styles from './Button.module.scss';

interface IProps {
  type?: 'button' | 'submit' | 'reset' | undefined;
  variant?:
    | 'base'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark'
    | 'link';
  className?: string;
  pending?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

const Button: FC<PropsWithChildren<IProps>> = ({
  type = 'button',
  className,
  variant = 'base',
  children,
  pending,
  disabled,
  ...props
}) => {
  const buttonClasses = classNames(
    styles.btn,
    variant && styles[`btn${variant.charAt(0).toUpperCase() + variant.slice(1)}`],
    className,
  );

  return (
    <div className={styles.btnWrapper}>
      <button {...props} type={type} className={buttonClasses} disabled={disabled || pending}>
        {children}
      </button>
      {pending && <Spinner width={25} />}
    </div>
  );
};

export default Button;
