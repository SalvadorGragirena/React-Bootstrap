import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = () => {
  return (
    <div>
      <FaShoppingCart size={'2rem'} color={'purple'} />
      <span style={{marginLeft: '10px'}}>{5}</span>
    </div>
  );
};

export default CartWidget;