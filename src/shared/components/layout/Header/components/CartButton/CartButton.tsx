import React, { FC, useState } from 'react';

import Button from '@components/general/Button';
import CartModal from '@modals/CartModal';

import { useAppSelector } from '@hooks/useAppSelector';

// import styles from './CartButton.module.scss';

const CartButton: FC = () => {
  console.log('CartButton');
  const { pending } = useAppSelector(state => state.auth);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Button variant="info" onClick={() => setIsModalOpen(true)} disabled={pending}>
        <i className="fa-solid fa-cart-shopping" />
      </Button>
      {isModalOpen && <CartModal onClose={() => setIsModalOpen(false)} />}
    </>
  );
};

export default CartButton;
