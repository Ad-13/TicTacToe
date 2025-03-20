import React, { FC, memo } from 'react';
import { Formik, Form, Field } from 'formik';

import { register } from '@reducers/auth/thunks';

import Modal from '@components/general/Modal';
import Input from '@inputs/Input';
import Button from '@components/general/Button';
import ModalButtons from '@components/general/ModalButtons';

import useActions from '@hooks/useActions';
import { useAppSelector } from '@hooks/useAppSelector';
import { TRegisterRequest } from '@helpersTypes/auth';
import { initialValues, validationSchema } from './form';

// import styles from './RegisterModal.module.scss';

interface IProps {
  onClose: () => void;
  onLoginClick: () => void;
}

const RegisterModal: FC<IProps> = ({ onClose, onLoginClick }) => {
  console.log('RegisterModal');
  const { register: registerThunk } = useActions({ register });
  const { pending } = useAppSelector(state => state.auth);

  const handleSubmit = (values: TRegisterRequest) => {
    console.log(values);
    registerThunk(values);
  };

  return (
    <Modal onClose={onClose} title="Register">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isValid }) => (
          <Form>
            <Field component={Input} name="name" type="text" label="Name" autoFocus />
            <Field component={Input} name="email" type="text" label="Email" />
            <Field component={Input} name="telephone" type="text" label="Telephone" />
            <Field component={Input} name="password" type="password" label="Password" />
            <Field
              component={Input}
              name="confirmPassword"
              type="password"
              label="Confirm Password"
            />
            <ModalButtons>
              <Button type="submit" variant="primary" pending={pending} disabled={!isValid}>
                Register
              </Button>
              <Button type="button" variant="link" onClick={onLoginClick} disabled={pending}>
                I am already registered
              </Button>
            </ModalButtons>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default memo(RegisterModal);
