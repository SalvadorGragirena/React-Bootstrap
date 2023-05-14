import React from 'react';
import ItemCount from './ItemCount';
const ItemDetail = (props) => {
  console.log(props);
  const { name, description, price, stock, img, id } = props;
  const onAdd = (cantidad) => {
    console.log(`Compraste ${cantidad} items`);
  };
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
