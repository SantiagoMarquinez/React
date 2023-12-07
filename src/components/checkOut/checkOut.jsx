import { useState, useEffect, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { db } from "../../firebase/config";
import { collection, addDoc, updateDoc, doc, getDoc } from "firebase/firestore";


const Checkout = () => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfirmacion] = useState("");
    const [error, setError] = useState("");
    const [ordenId, setOrdenId] = useState("");
    const { carrito, vaciarCarrito, total, totalCantidad } = useContext(CartContext);

    const manejadorFormulario = (event) => {
        event.preventDefault();

        if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError("Por favor completa todos los campos");
            return;
        }

        if (email !== emailConfirmacion) {
            setError("Los campos del email no coinciden");
            return;
        }

        const orden = {
            items: carrito.map(prod => ({
                id: prod.producto.id,
                nombre: prod.producto.nombre,
                cantidad: prod.cantidad
            })),
            total: total,
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email
        };

        //Descuento de stock en firebase
        Promise.all(
            orden.items.map(async (productoOrden) => {
                const productoRef = doc(db, "productos", productoOrden.id);
                const productoDoc = await getDoc(productoRef);
                const stockActual = productoDoc.data().stock;
                await updateDoc(productoRef, {
                    stock: stockActual - productoOrden.cantidad
                })
            })
        )
            .then(() => {
                addDoc(collection(db, "ordenes"), orden)
                    .then(docRef => {
                        setOrdenId(docRef.id);
                        vaciarCarrito();
                    })
                    .catch(error => {
                        console.log("Error al crear la orden", error);
                        setError("Se produjo un error al crear la orden");
                    })
            })
            .catch((error) => {
                console.log("No se pudo actualizar el stock", error);
                setError("No se puede actualizar el stock");
            })
    }

    return (
        <div>
            <h2>Checkout</h2>

            <form onSubmit={manejadorFormulario} className="formulario">
                {
                    carrito.map(prod => (
                        <div key={producto.id}>
                            <p> {prod.producto.nombre} - Cantidad: {prod.cantidad} </p>
                            <p>{prod.producto.precio}</p>
                            <hr />
                        </div>
                    ))
                }
<div className="form-group">
    <label htmlFor="nombre">Nombre</label>
    <input type="text" id="nombre" onChange={(e) => setNombre(e.target.value)} />
</div>

<div className="form-group">
    <label htmlFor="apellido">Apellido</label>
    <input type="text" id="apellido" onChange={(e) => setApellido(e.target.value)} />
</div>

<div className="form-group">
    <label htmlFor="telefono">Teléfono</label>
    <input type="text" id="telefono" onChange={(e) => setTelefono(e.target.value)} />
</div>

<div className="form-group">
    <label htmlFor="email">Email</label>
    <input type="email" id="email" autoComplete="off" onChange={(e) => setEmail(e.target.value)} />
</div>

<div className="form-group">
    <label htmlFor="emailConfirmacion">Email Confirmación</label>
    <input type="email" id="emailConfirmacion" onChange={(e) => setEmailConfirmacion(e.target.value)} />
</div>

                {
                    error && <p style={{ color: "orange" }}> {error} </p>
                }

                <button type="submit"> Confirmar Compra </button>

                {
                    ordenId && (
                        <strong className="orderId">¡Gracias por tu compra! Tu número de orden es: {ordenId} </strong>
                    )
                }

            </form>
        </div>
    )
}

export default Checkout