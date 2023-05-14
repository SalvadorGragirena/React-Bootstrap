import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { getProducts } from './data/FakeApi'
import Loader from './Loader/Loader';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ greeting, dimetop }) => {
  const [listaProductos, setListaProductos] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();


  useEffect(() => {
    setLoading(true);
    getProducts()
      .then((res) => {
        if (id) {
          setListaProductos(res.filter((item) => item.category === id));
        } else if (dimetop === true) {
          setListaProductos(res.filter((item) => item.top === true));
        } else {
          setListaProductos(res);
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);



  return (
    <div>
      <h2>
        {greeting}{' '}
        <span style={{ textTransform: 'capitalize', color: '#c737d7' }}>
          {id && id}
        </span>
      </h2>
      {loading ? <Loader /> : <ItemList listaProductos={listaProductos} />}
    </div>
  );
};

export default ItemListContainer;
