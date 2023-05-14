import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const spanStyle = {
  color: 'white',
}

const CartWidget = () => {
  return (
    <div>
      <FaShoppingCart size={'2rem'} color={'purple'} />
      <span style={spanStyle}>{5}</span>
    </div>
  );
};

export default CartWidget;