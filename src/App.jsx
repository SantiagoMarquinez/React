import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemCount from './components/ItemCount'

const App = () => {
  return (
    <div>
      <ItemListContainer greeting={"Bienvenido a Cuervo Store"} />
      <NavBar />
      <ItemCount/>
    </div>
  )
}

export default App