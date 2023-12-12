import { useState, useEffect, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { db } from "../../firebase/config";
import { collection, addDoc, updateDoc, doc, getDoc, query, where, getDocs } from "firebase/firestore";

const Checkout = () => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfirmacion] = useState("");
    const [error, setError] = useState("");
    const [ordenId, setOrdenId] = useState("");
    const { carrito, vaciarCarrito, total } = useContext(CartContext);

    const manejadorFormulario = async (event) => {
        event.preventDefault();

        try {
            // Validaciones de formulario
            if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
                throw new Error("Por favor completa todos los campos");
            }

            if (email !== emailConfirmacion) {
                throw new Error("Los campos del email no coinciden");
            }

            // Descuento de stock en Firebase
            await Promise.all(
                carrito.map(async (prod) => {
                    const productosQuery = query(collection(db, "products"), where("id", "==", prod.producto.id));
                    const productosSnapshot = await getDocs(productosQuery);

                    if (!productosSnapshot.empty) {
                        const primerProducto = productosSnapshot.docs[0];
                        const stockActual = primerProducto.data().stock;

                        await updateDoc(primerProducto.ref, {
                            stock: stockActual - prod.cantidad,
                        });
                    } else {
                        console.log(`No se encontró ningún producto con el ID ${prod.producto.id}`);
                    }
                })
            );

            // Crear orden en la colección "ordenes"
            const orden = {
                items: carrito.map((prod) => ({
                    id: prod.producto.id,
                    nombre: prod.producto.nombre,
                    cantidad: prod.cantidad,
                })),
                total: total,
                fecha: new Date(),
                nombre,
                apellido,
                telefono,
                email,
            };

            if (orden.items.length === 0) {
                throw new Error("No hay productos en el carrito");
            }

            const docRef = await addDoc(collection(db, "ordenes"), orden);

            setOrdenId(docRef.id);
            vaciarCarrito();
        } catch (error) {
            console.error("Error en el proceso de checkout:", error);
            setError(error.message || "Se produjo un error durante el proceso de checkout");
        }
    };

    return (
        <div>
            <h2>Checkout</h2>

            <form onSubmit={manejadorFormulario} className="formulario">
                {
                    carrito.map(prod => (
                        <div key={prod.producto.id}>
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