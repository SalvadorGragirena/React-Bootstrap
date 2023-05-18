import React, { createContext, useState } from 'react';

export const CartContext = createContext()

const CartProvider = ( {children} ) => {

    const[cartArray, setCartArray] = useState([]);

    const addToCart = (product, count) => {
        console.log(`Agregaste ${product.name}, cantidad ${count}.`);
        const newObj = {
            item: product,
            count
        }
        setCartArray([...cartArray, newObj])
    }

    const deleteItem = (id) => {
        const updatedCart = cartArray.filter(element => element.item.id !== id);
        setCartArray(updatedCart);
    }

    const clearCart = () => {
        setCartArray([]);
    }

    const isInCart = (id) => {
        return cartArray.some(element => element.id === id)
    }

    const value = {
        cartArray,
        addToCart,
        deleteItem,
        clearCart,
        isInCart
    }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider