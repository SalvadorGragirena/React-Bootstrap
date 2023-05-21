import React, { useContext, useState, useEffect } from 'react';
import ItemCount from './ItemCount';
import { CartContext } from '../context/CartContext';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { getProducts } from './data/FakeApi'
import ItemList from './ItemList';
import Loader from './Loader/Loader';

const ItemDetail = (props) => {

  const { name, description, price, stock, img, id } = props;

  const { addToCart } = useContext(CartContext);

  const [listaProductos, setListaProductos] = useState([]);
  const [loading, setLoading] = useState(false);



  const onAdd = (cantidad) => {
    addToCart(props, cantidad);
  }


  useEffect(() => {
    setLoading(true);
  getProducts()
  .then((res) => {
    setListaProductos(res.filter((item) => item.oferta === true && item.id !== id));
  })
  .catch((error) => console.log(error))
  .finally(() => setLoading(false));
}, []);

const style_top = {
  marginTop: '50px'
}

  return (
    <Container>
      <Row>
        <h2>Detalle de: {name}</h2>
      </Row>
      <Row>
        <Col>
          <img src={img} alt={name} style={{ width: '25rem' }} />
        </Col>
        <Col>
          <p>{description}</p>
          <p>Precio de producto: ${price}</p>
          <ItemCount initial={1} stock={stock} onAdd={onAdd} />
        </Col>
      </Row>
      <Row>
      <h2 style={style_top}>Productos en oferta</h2>
      {loading ? <Loader /> : <ItemList listaProductos={listaProductos} />}
      </Row>
    </Container >
  );
};

export default ItemDetail;
