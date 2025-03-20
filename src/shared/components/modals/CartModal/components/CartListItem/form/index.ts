import { number, object } from 'yup';

export const initialValues = {
  quantity: 1,
};

export const validationSchema = (prodQuantity: number) =>
  object({
    quantity: number()
      .min(1, 'Quantity must be at least 1')
      .test({
        name: 'max-quantity',
        message: 'Quantity exceeds available stock',
        test: function (value: number | undefined) {
          if (typeof value === 'undefined') return false;
          return value <= prodQuantity;
        },
      })
      .test({
        name: 'min-quantity',
        message: 'Quantity must be at least 1',
        test: function (value: number | undefined) {
          if (typeof value === 'undefined') return false;
          return value >= 1;
        },
      })
      .required('Required'),
  });
