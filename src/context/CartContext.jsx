import React, { createContext, useEffect, useState } from 'react';

export const CartContext = createContext()

const CartProvider = ({ children }) => {

    const [cartArray, setCartArray] = useState([]);
    const [TotalCount, setTotalCount] = useState(0);

    const addToCart = (product, count) => {
        if (isInCart(product.id)) {
            console.log("Ya esta el producto en carrito");
        }
        else {
            console.log(`Agregaste ${product.name}, cantidad ${count}.`);
            const newObj = {
                item: product,
                count
            }
            setCartArray([...cartArray, newObj])
        }
    }

    const deleteItem = (id) => {
        const updatedCart = cartArray.filter(element => element.item.id !== id);
        setCartArray(updatedCart);
    }

    const clearCart = () => {
        setCartArray([]);
    }

    const isInCart = (id) => {
        return cartArray.some(element => element.item.id === id)
    }



   const getQuantity = () => {
    if (cartArray.length){
        let cant = 0
        cartArray.forEach((e) => cant += e.count )
        return cant;
    } else{
         return 0;
    }
   };

    const value = {
        cartArray,
        getQuantity,
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