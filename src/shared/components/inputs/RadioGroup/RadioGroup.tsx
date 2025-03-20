import { FC } from 'react';
import { Field } from 'formik';

import InputRadio from '@components/inputs/InputRadio';

import styles from './RadioGroup.module.scss';

interface OptionType {
  label: string;
  value: string | number;
}

interface Props {
  name: string;
  options: OptionType[];
  title?: string;
}

const RadioGroup: FC<Props> = ({ name, options, title }) => {
  return (
    <div className={styles.radioGroup}>
      {title && <div className={styles.title}>{title}</div>}
      {options.map(option => (
        <Field
          key={option.value}
          label={option.label}
          component={InputRadio}
          name={name}
          radioValue={option.value}
        />
      ))}
    </div>
  );
};

export default RadioGroup;
