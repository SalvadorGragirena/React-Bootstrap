import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";


const CartContainer = () => {

    const { cartArray } = useContext(CartContext);

    return (
        <div>
            {cartArray.length === 0 &&
                <div>
                    <p>No hay productos en carrito</p>
                    <Link to="/"> Ir a inicio</Link>
                </div>
            }
            {cartArray.length > 0 && cartArray.map(prod => <CartItem key={prod.item.id} product={prod} />)}
        </div>
    )
}

export default CartContainer;