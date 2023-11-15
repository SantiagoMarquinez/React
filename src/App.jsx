import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import Cart from './components/Cart';
import ItemDetailContainer from './components/ItemDetailContainer';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<ItemListContainer />}/>
          <Route exact path="/itemListContainer" element={<ItemListContainer />} />
          <Route exact path='/cart' element={<Cart/>}/>
          <Route exact path='/itemDetailContainer/:id' element={<ItemDetailContainer/>}/>



        </Routes>
      </BrowserRouter>
    </div>

  )

};

export default App