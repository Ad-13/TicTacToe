import { FC } from 'react';

import styles from './InputError.module.scss';

interface IProps {
  error: string;
}

const InputError: FC<IProps> = ({ error }) => <div className={styles.error}>{error}</div>;

export default InputError;
