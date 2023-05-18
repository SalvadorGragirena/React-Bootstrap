import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from "react-router-dom";

const CartWidget = () => {
  const [TotalItemCarrito, setTotalItemCarrito] = useState(6);

  return (
    <div>
      <Link to="/CartContainer">
         <FaShoppingCart size={'2rem'} color={'purple'} />
      </Link>

      <span style={{ marginLeft: '10px' }}>5</span>
      
    </div>
  );
};

export default CartWidget;

