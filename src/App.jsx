import React,{useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Cart from './components/Cart';
import ItemDetailContainer from './components/ItemDetailContainer';
import Checkout from './components/checkOut/checkOut';
import {CartProvider } from './context/CartContext';

const App = () => {
  const [carrito, setCarrito] = useState([]);
  return (
    <div className='principal'>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<ItemListContainer />} />
            <Route exact path="/categoria/:idCategoria" element={<ItemListContainer />} />
            <Route exact path='/item/:idItem' element={<ItemDetailContainer />} />
            <Route exact path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout/>} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>

  )

};

export default App