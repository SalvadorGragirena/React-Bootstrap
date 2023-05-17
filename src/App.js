
import './App.css';
import { Fragment } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./components/Menu";
import Main from "./components/Main";
import Nosotros from "./components/Nosotros";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer';
import CartProvider from './context/CartContext';

function App() {
  return (
    <Fragment>
      <CartProvider>
        <BrowserRouter>
          <Menu />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/Nosotros" element={<Nosotros />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </CartProvider>
    </Fragment>
  );
}

export default App;
