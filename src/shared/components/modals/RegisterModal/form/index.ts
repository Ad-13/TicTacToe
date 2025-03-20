import { object, ref, string } from 'yup';

import { TRegisterRequest } from '@helpersTypes/auth';

export const initialValues: TRegisterRequest = {
  name: '',
  email: '',
  telephone: '',
  password: '',
  confirmPassword: '',
};

export const validationSchema = object({
  name: string().required('Required'),
  email: string().email().required('Required'),
  telephone: string().required('Required'),
  password: string().required('Required'),
  confirmPassword: string()
    .oneOf([ref('password')], 'Passwords must match')
    .required('Required'),
});
