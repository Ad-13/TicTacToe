import { FC } from 'react';
import { FieldProps } from 'formik';
import classNames from 'classnames';

import InputError from '@components/inputs/InputError';

import styles from './Textarea.module.scss';

interface IProps extends FieldProps {
  label: string;
  rows?: number;
  isShowError: boolean;
  disabled: boolean;
}

const Textarea: FC<IProps> = ({
  field: { name, value, onBlur, onChange },
  form: { touched, errors },
  label,
  isShowError = true,
  disabled,
  rows,
}) => {
  const error = (touched[name] && errors[name]) as string;

  return (
    <div className={styles.inputGroup}>
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
        <textarea
          id={name}
          name={name}
          value={value}
          disabled={disabled}
          onBlur={onBlur}
          onChange={onChange}
          rows={rows}
          className={classNames(styles.input, {
            [styles.invalid]: error,
          })}
        />
      </div>
      {isShowError && error && <InputError error={error} />}
    </div>
  );
};

export default Textarea;
