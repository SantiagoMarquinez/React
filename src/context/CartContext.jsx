
import { useState, createContext, useEffect } from "react";

export const CartContext = createContext({
    carrito: [],
    total: 0,
    cantidadTotal: 0,
    agregarAlCarrito: () => {},
    eliminarProducto: () => {},
    vaciarCarrito: () => {},
});

export const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);
    const [total, setTotal] = useState(0);
    const [cantidadTotal, setCantidadTotal] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const carritoGuardado = localStorage.getItem('carrito');
        console.log('Carrito cargado desde localStorage:', carritoGuardado);
        if (carritoGuardado) {
            setCarrito(JSON.parse(carritoGuardado));
            const cantidadTotalCalculada = JSON.parse(carritoGuardado).reduce((total, item) => total + item.cantidad, 0);
            const totalCalculado = JSON.parse(carritoGuardado).reduce((total, item) => total + (item.producto.precio * item.cantidad), 0);
            setCantidadTotal(cantidadTotalCalculada);
            setTotal(totalCalculado);
        }
        setLoading(false);
    }, []);

    useEffect(() => {
        if (!loading) {
            // Actualizar el localStorage después de cada cambio en el carrito
            localStorage.setItem('carrito', JSON.stringify(carrito));
            console.log(`carrito almacenado: ${JSON.stringify(carrito)}`);
        }
    }, [carrito, loading]);

    //Para agregar productos al carrito
    const agregarAlCarrito = (producto, cantidad) => {
        console.log('Agregando al carrito:', producto, cantidad);
        const productoExistente = carrito.find(prod => prod.producto.id === producto.id);
    
        if (!productoExistente) {
            setCarrito(prev => [...prev, { producto, cantidad }]);
        } else {
            const carritoActualizado = carrito.map(prod => {
                if (prod.producto.id === producto.id) {
                    return { ...prod, cantidad: prod.cantidad + cantidad };
                } else {
                    return prod;
                }
            });
            setCarrito(carritoActualizado);
        }
        setCantidadTotal(prev => prev + cantidad);
        setTotal(prev => prev + (producto.precio * cantidad));
    };
    
    // Para eliminar productos del carrito
    const eliminarProducto = (id) => {
        console.log('Eliminando producto del carrito con ID:', id);
        const productoEliminado = carrito.find((prod) => prod.producto.id === id);
        const carritoActualizado = carrito.filter((prod) => prod.producto.id !== id);
        setCarrito(carritoActualizado);
        setCantidadTotal((prev) => prev - productoEliminado.cantidad);
        setTotal((prev) => prev - productoEliminado.producto.precio * productoEliminado.cantidad);
    };

    //Para vaciar el carrito
    const vaciarCarrito = () => {
        console.log('Vaciando el carrito');
        localStorage.removeItem('carrito');
        setCarrito([]);
        setCantidadTotal(0);
        setTotal(0);
    }

    return (
        <CartContext.Provider
            value={{
                carrito,
                total,
                cantidadTotal,
                agregarAlCarrito,
                eliminarProducto,
                vaciarCarrito,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
