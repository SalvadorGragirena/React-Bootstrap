import React, { createContext, useState } from 'react';

export const CartContext = createContext()

const CartProvider = ( {children} ) => {

    const[cartArray, setCartArray] = useState([]);
  
    const value = {
        cartArray
    }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider