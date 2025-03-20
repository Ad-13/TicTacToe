import { object, string } from 'yup';

import { TLoginRequest } from '@helpersTypes/auth';

export const initialValues: TLoginRequest = {
  email: '',
  password: '',
};

export const validationSchema = object({
  email: string().email().required('Required'),
  password: string().required('Required'),
});
