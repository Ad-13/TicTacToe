import { object, string } from 'yup';

const message = `Dear Sir/Madam,

I am interested in your offer.
Please contact me.

Kind regards`;

export const initialValues = {
  email: '',
  name: '',
  message,
};

export const validationSchema = object({
  name: string().required('Required'),
  email: string().email().required('Required'),
  message: string().required('Required'),
});
