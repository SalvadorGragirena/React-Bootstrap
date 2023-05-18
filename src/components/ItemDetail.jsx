import React, { useContext } from 'react';
import ItemCount from './ItemCount';
import { CartContext } from '../context/CartContext';

const ItemDetail = (props) => {

  const { name, description, price, stock, img, id } = props;

  const { addToCart } = useContext(CartContext);

  const onAdd = (cantidad) => {
    addToCart(props, cantidad);
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '3rem',
      }}
    >
      <h2>Detalle de: {name}</h2>
      <img src={img} alt={name} style={{ width: '25rem' }} />
      <p>{description}</p>
      <p>${price}</p>
      <ItemCount initial={1} stock={stock} onAdd={onAdd} />
    </div>
  );
};

export default ItemDetail;
