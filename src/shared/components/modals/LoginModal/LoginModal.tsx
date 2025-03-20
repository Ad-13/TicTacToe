import React, { FC } from 'react';
import { Formik, Form, Field } from 'formik';

import { login } from '@reducers/auth/thunks';

import Modal from '@components/general/Modal';
import Input from '@inputs/Input';
import Button from '@components/general/Button';
import ModalButtons from '@components/general/ModalButtons';

import useActions from '@hooks/useActions';
import { useAppSelector } from '@hooks/useAppSelector';
import { TLoginRequest } from '@helpersTypes/auth';
import { initialValues, validationSchema } from './form';

// import styles from './LoginModal.module.scss';

interface IProps {
  onClose: () => void;
  onRegisterClick: () => void;
}

const LoginModal: FC<IProps> = ({ onClose, onRegisterClick }) => {
  console.log('LoginModal');
  const { login: loginThunk } = useActions({ login });
  const { pending } = useAppSelector(state => state.auth);

  const handleSubmit = async (values: TLoginRequest) => {
    console.log(values);
    await loginThunk(values);
    onClose();
  };

  return (
    <Modal onClose={onClose} title="Login">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isValid }) => (
          <Form>
            <Field component={Input} name="email" type="text" label="Email" autoFocus />
            <Field component={Input} name="password" type="password" label="Password" />
            <ModalButtons>
              <Button type="submit" variant="primary" pending={pending} disabled={!isValid}>
                Submit
              </Button>
              <Button type="button" variant="link" onClick={onRegisterClick}>
                Register
              </Button>
            </ModalButtons>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default LoginModal;
