import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
    const {carrito, vaciarCarrito, total, cantidadTotal} = useContext (CartContext);

    if (cantidadTotal === 0) {
        return (
            <>
                <div className="carrito">
                    <h2 className="productoCarrito">No hay productos en el carrito.</h2>
                    <Link to="/" className="productoCarrito"> Ver produtos </Link>
                </div>
            </>
        )
    }

    return (
        <div className="carrito">
            <div className="productoCarrito">
                {
                    carrito.map(prod => <CartItem key={prod.producto.id} {...prod} />)
                }   
                <h3>Total: ${total} </h3>
                <h3>Cantidad Total: {cantidadTotal} </h3>
                <button onClick={() => vaciarCarrito()}> Vaciar carrito </button>
                <Link to="/checkout">Finalizar compra</Link>
            </div>
        </div>
        )
}

export default Cart