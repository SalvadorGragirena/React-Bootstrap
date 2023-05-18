import React, { createContext, useState } from 'react';

export const CartContext = createContext()

const CartProvider = ({ children }) => {

    const [cartArray, setCartArray] = useState([]);

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
            productCount();
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
/* 
    Usar Use Effect para hacer logica al renderizar componente

    const productCount = () => {
        if (cartArray.length > 1) {
            const value = cartArray.reduce((prev, current) => prev.count + current.count);
            setTotalCount(value);
        } else{
            setTotalCount(cartArray[0].count);
        }
    }
*/

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