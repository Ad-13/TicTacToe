import { FC } from 'react';
import Select from 'react-select';
import { FieldProps } from 'formik';
import classNames from 'classnames';

import InputError from '@components/inputs/InputError';

import { OptionType } from '@sharedTypes/selectOption';

import styles from './Select.module.scss';
import './Select.scss';

interface IProps extends FieldProps {
  label: string;
  placeholder: string;
  displayField: string;
  valueField: string;
  isShowError: boolean;
  isClearable: boolean;
  isSearchable: boolean;
  isMulti: boolean;
  disabled: boolean;
  autoFocus: boolean;
  options: OptionType[];
  customCallback: (selectedOption: OptionType) => void;
}

const SelectInput: FC<IProps> = ({
  field: { name, value },
  form: { touched, errors, setFieldValue },
  label,
  isShowError = true,
  disabled,
  autoFocus,
  options = [],
  placeholder = '',
  isClearable,
  isSearchable,
  isMulti,
  customCallback,
}) => {
  const error = (touched[name] && errors[name]) as string;

  const handleChange = (selectedOption: OptionType) => {
    setFieldValue(name, selectedOption);
    customCallback?.(selectedOption);
  };

  return (
    <div className={classNames(styles.inputGroup, { [styles.invalid]: error })}>
      {label && <label className={styles.label}>{label}</label>}
      <Select
        className={styles.select}
        classNamePrefix="react-select"
        options={options}
        onChange={handleChange}
        value={value}
        name={name}
        isDisabled={disabled}
        isClearable={isClearable}
        isSearchable={isSearchable}
        placeholder={placeholder}
        isMulti={isMulti}
        autoFocus={autoFocus}
      />
      {isShowError && error && <InputError error={error} />}
    </div>
  );
};

export default SelectInput;
