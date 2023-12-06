
import { useState, createContext } from "react"

export const CartContext = createContext({
    carrito: [],
    total: 0,
    cantidadTotal: 0
});

export const CartProvider = ({children}) => {

const [carrito, setCarrito] = useState([]);
const [total, setTotal] = useState(0);
const [cantidadTotal, setCantidadTotal] = useState(0);

  //Para agregar productos al carrito
const agregarAlCarrito = (producto, cantidad) => {
    const productoExistente = carrito.find(prod => prod.id === producto.id);

    if (!productoExistente) {
    setCarrito(prev => [...prev, { producto, cantidad }]);
    setCantidadTotal(prev => prev + cantidad);
      setTotal(prev => prev + (producto.precio * cantidad));
    } else {
    const carritoActualizado = carrito.map(prod => {
        if (prod.producto.id === producto.id) {
        return { ...prod, cantidad: prod.cantidad + cantidad };
        } else {
        return prod;
        }
    })
    setCarrito(carritoActualizado)
    setCantidadTotal(prev => prev + cantidad);
      setTotal(prev => prev + (producto.precio * cantidad));
    }
}

  //Para eliminar productos del carrito
const eliminarProducto = (id) => {
    const productoEliminado = carrito.find(prod => prod.producto.id === id);
    const carritoActualizado = carrito.filter(prod => prod.producto.id !== id);

    setCarrito(carritoActualizado);
    setCantidadTotal(prev => prev - productoEliminado.cantidad);
    setTotal(prev => prev - (productoEliminado.producto.precio * productoEliminado.cantidad))
}

  //Para vaciar el carrito
const vaciarCarrito = () => {
    setCarrito([]);
    setCantidadTotal(0);
    setTotal(0);
}

return (
    <CartContext.Provider value={{ carrito, total, cantidadTotal, agregarAlCarrito, eliminarProducto, vaciarCarrito }}>
    {children}
    </CartContext.Provider>
)
}

export default CartProvider
