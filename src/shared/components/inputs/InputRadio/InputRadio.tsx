import { FC } from 'react';
import { FieldProps } from 'formik';
import classNames from 'classnames';

import InputError from '@components/inputs/InputError';

import styles from './InputRadio.module.scss';

interface IProps extends FieldProps {
  label: string;
  radioValue: string | number;
  isShowError: boolean;
  disabled: boolean;
}

const InputRadio: FC<IProps> = ({
  field: { name, onChange },
  form: { touched, errors },
  label,
  radioValue,
  isShowError = true,
  disabled,
}) => {
  const error = (touched[name] && errors[name]) as string;

  return (
    <div className={classNames(styles.radio, { [styles.invalid]: error })}>
      <label className={styles.label}>
        <input
          type="radio"
          name={name}
          value={radioValue}
          onChange={onChange}
          disabled={disabled}
          className={styles.hiddenRadio}
        />
        <div className={styles.radioCustom}></div>
        {label}
      </label>
      {isShowError && error && <InputError error={error} />}
    </div>
  );
};

export default InputRadio;
