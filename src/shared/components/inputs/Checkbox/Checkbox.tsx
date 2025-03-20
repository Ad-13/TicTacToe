import { FC } from 'react';
import { FieldProps } from 'formik';
import classNames from 'classnames';

import InputError from '@components/inputs/InputError';

import styles from './Checkbox.module.scss';

interface IProps extends FieldProps {
  label: string;
  isShowError: boolean;
  disabled: boolean;
}

const Checkbox: FC<IProps> = ({
  field: { name, checked, onChange },
  form: { touched, errors },
  label,
  isShowError = true,
  disabled,
}) => {
  const error = (touched[name] && errors[name]) as string;

  return (
    <div className={classNames(styles.checkbox, { [styles.invalid]: error })}>
      <label className={styles.label}>
        <input
          type="checkbox"
          name={name}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          className={styles.hiddenCheckbox}
        />
        <div className={styles.checkboxCustom}></div>
        {label}
      </label>
      {isShowError && error && <InputError error={error} />}
    </div>
  );
};

export default Checkbox;
