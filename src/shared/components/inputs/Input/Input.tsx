import { FC, ReactNode } from 'react';
import { FieldProps } from 'formik';
import classNames from 'classnames';

import InputError from '@components/inputs/InputError';

import styles from './Input.module.scss';

type InputType =
  | 'text'
  | 'number'
  | 'email'
  | 'password'
  | 'tel'
  | 'date'
  | 'time'
  | 'datetime-local'
  | 'month'
  | 'week'
  | 'url'
  | 'search'
  | 'color';

interface IProps extends FieldProps {
  label: string;
  type: InputType;
  isShowError: boolean;
  disabled: boolean;
  image: ReactNode;
  className: string;
}

const Input: FC<IProps> = ({
  field: { name, value, onBlur, onChange },
  form: { touched, errors },
  label,
  type = 'text',
  isShowError = true,
  image,
  disabled,
  className,
  ...props
}) => {
  const error = (touched[name] && errors[name]) as string;

  return (
    <div className={`${styles.inputGroup} ${className ? className : ''}`}>
      {label && (
        <label className={styles.label} htmlFor={name}>
          {label}
        </label>
      )}
      <div
        className={classNames(styles.inputWrapper, {
          [styles.disabled]: disabled,
        })}
      >
        <input
          {...props}
          type={type}
          id={name}
          name={name}
          value={value}
          disabled={disabled}
          onBlur={onBlur}
          onChange={onChange}
          className={classNames(styles.input, {
            [styles.invalid]: error,
          })}
        />
        {image && <div className={styles.img}>{image}</div>}
      </div>
      {isShowError && error && <InputError error={error} />}
    </div>
  );
};

export default Input;
