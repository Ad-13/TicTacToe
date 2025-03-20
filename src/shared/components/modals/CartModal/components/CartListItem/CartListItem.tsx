import React, { FC, useState } from 'react';
import { Formik, Form, Field } from 'formik';

import { deleteCartProduct, updateCartProduct } from '@store/reducers/cart/thunks';

import ButtonDelete from '@components/general/ButtonDelete';
import AutoSubmit from '@components/inputs/AutoSubmit';
import Input from '@components/inputs/Input';
import Spinner from '@components/general/Spinner';
import Button from '@components/general/Button';

import { TCartProduct } from '@helpersTypes/cart';
import { baseUrl } from '@constants/api';
import { initialValues, validationSchema } from './form';
import { useAppDispatch } from '@hooks/useAppDispatch';

import styles from './CartListItem.module.scss';

type IProps = {
  item: TCartProduct;
};

const CartListItem: FC<IProps> = ({ item }) => {
  const dispatch = useAppDispatch();
  const [pending, setPending] = useState(false);
  console.log('renderItem');

  const handleDelete = async () => {
    console.log('handleDelete');
    setPending(true);
    try {
      await dispatch(deleteCartProduct(item.id));
    } catch (error) {
      setPending(false);
    }
  };

  const handleSubmit = async ({ quantity }: typeof initialValues) => {
    const { product, ...model } = item;
    setPending(true);
    try {
      await dispatch(updateCartProduct({ ...model, quantity }));
    } finally {
      setPending(false);
    }
  };

  return (
    <div className={styles.productCard}>
      <div className={styles.productImage}>
        <img
          src={`${baseUrl}/${item.product.images[0]}`}
          alt={item.product.model}
          className={styles.img}
        />
      </div>
      <div className={styles.productDetails}>
        <div className={styles.productDetailsTop}>
          <h2 className={styles.productName}>{item.product.model}</h2>
          <div className={styles.productPrice}>${item.product.price * item.quantity}</div>
        </div>
        <div className={styles.productDetailsBottom}>
          <Formik
            initialValues={{ ...initialValues, quantity: item.quantity }}
            validationSchema={validationSchema(item.product.quantity)}
            onSubmit={handleSubmit}
          >
            {({ setFieldValue, values }) => (
              <Form>
                <div className={styles.label}>Quantity:</div>
                <div className={styles.btnWrapper}>
                  <Button
                    className={styles.formAction}
                    disabled={values.quantity <= 1}
                    onClick={() => setFieldValue('quantity', values.quantity - 1)}
                  >
                    -
                  </Button>
                  <Field className={styles.input} component={Input} type="number" name="quantity" />
                  <Button
                    className={styles.formAction}
                    disabled={values.quantity >= item.product.quantity}
                    onClick={() => setFieldValue('quantity', values.quantity + 1)}
                  >
                    +
                  </Button>
                </div>
                <AutoSubmit />
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <div className={styles.productActions}>
        <ButtonDelete onClick={handleDelete} />
        {pending && (
          <div className={styles.spinnerWrapper}>
            <Spinner className={styles.spinner} />
          </div>
        )}
      </div>
    </div>
  );
};

export default CartListItem;
