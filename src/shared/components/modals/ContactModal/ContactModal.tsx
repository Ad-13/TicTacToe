import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';

import { createContactMessage } from '@reducers/cars/thunks';

import Input from '@components/inputs/Input';
import Modal from '@components/general/Modal';
import Button from '@components/general/Button';
import Textarea from '@components/inputs/Textarea';
import ModalButtons from '@components/general/ModalButtons';

import { useAppSelector } from '@hooks/useAppSelector';
import useActions from '@hooks/useActions';
import { initialValues, validationSchema } from './form';

interface IProps {
  onClose: () => void;
}

const ContactModal: FC<IProps> = ({ onClose }) => {
  console.log('ContactModal');
  const { id } = useParams();
  const { createContactMessage: createContactMessageThunk } = useActions({ createContactMessage });
  const { createMessagePending } = useAppSelector(state => state.cars);

  const handleSubmit = async (values: typeof initialValues) => {
    console.log(values);
    await createContactMessageThunk({ ...values, carId: Number(id) });
    onClose();
  };

  return (
    <Modal onClose={onClose} title="Contact">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isValid }) => (
          <Form>
            <Field component={Input} name="name" label="Name" autoFocus />
            <Field component={Input} name="email" label="Email" />
            <Field component={Textarea} name="message" label="Message" rows={15} />
            <ModalButtons>
              <Button
                type="submit"
                variant="primary"
                pending={createMessagePending}
                disabled={!isValid}
              >
                Send email
              </Button>
            </ModalButtons>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default ContactModal;
