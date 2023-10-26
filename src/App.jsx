import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

const App = () => {
  return (
    <div>
      <ItemListContainer greeting={"Bienvenido a Cuervo Store"} />
      <NavBar />

    </div>
  )
}

export default App