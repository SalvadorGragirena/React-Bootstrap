import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { count } from './ItemCount'

const CartWidget = () => {
  const [TotalItemCarrito, setTotalItemCarrito] = useState(6);
 
  return (
    <div>
      <FaShoppingCart size={'2rem'} color={'purple'} />
      <span style={{marginLeft: '10px'}}>5</span>
    </div>
  );
};

export default CartWidget;