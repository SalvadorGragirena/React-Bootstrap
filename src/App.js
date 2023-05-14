
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./components/Menu";
import Main from "./components/Main";
import Nosotros from "./components/Nosotros";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Fragment } from 'react';

import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <Fragment>
      <BrowserRouter>

        <Menu />

        <Routes>

          <Route path="/" element={<Main />} />
          <Route path="/Nosotros" element={<Nosotros />} />
          
          <Route path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>

      </BrowserRouter>
      <Footer />
    </Fragment>
  );
}

export default App;
