import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartItem = ({producto, cantidad}) => {
    const {eliminarProducto} = useContext (CartContext) ;

    return (
        <div>
            <h3>{producto.nombre}</h3>
            <p>Cantidad: {cantidad}</p>
            <p>Precio: {producto.precio}</p>
            <button className="botonCarrito" onClick={() => eliminarProducto(producto.id)}> Eliminar </button>
            <hr />
        </div>
    )
}

export default CartItem