import { useState, useEffect, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { db } from "../../firebase/config";
import { collection, addDoc, updateDoc, doc, getDoc, query, where, getDocs } from "firebase/firestore";
import Swal from "sweetalert2";

const Checkout = () => {
    function showSwal(ordenId) {
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "¡Gracias por su compra!",
            text: `Este es el identificador de su orden: ${ordenId}`,
            showConfirmButton: true,
        });
    }

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfirmacion] = useState("");
    const [error, setError] = useState("");
    const [ordenId, setOrdenId] = useState("");
    const { carrito, vaciarCarrito, total } = useContext(CartContext);
    useEffect(() => {
        if (ordenId) {
            showSwal(ordenId);
        }
    }, [ordenId]);
    const manejadorFormulario = async (event) => {
        event.preventDefault();

        try {
            // Validaciones de formulario
            if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
                Swal.fire({
                    icon: "error",
                    title: "Algo está mal...",
                    text: "Completa todos los campos"
                });
                return;
            }

            if (email !== emailConfirmacion) {
                setError("Los correos no coinciden. Vuelve a intentarlo");
                Swal.fire({
                    icon: "error",
                    title: "Algo está mal...",
                    text: "Los correos no coinciden. Vuelve a intentarlo"
                });
                return;
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
                setError("No hay productos en el carrito");
                Swal.fire({
                    icon: "error",
                    title: "Algo está mal...",
                    text: "No hay productos en el carrito"
                });
                return;
            }

            const docRef = await addDoc(collection(db, "ordenes"), orden);

            setOrdenId(docRef.id);
            vaciarCarrito();
        } catch (error) {
            console.error("Error en el proceso de checkout:", error.message);
        }
    };

    return (
        <div className="contenedorOrden">
            <div className="orden">
                <div className="contenedorProductosOrden">
                    {
                        carrito.map(prod => (
                            <div key={prod.producto.id} className="productoCarrito">
                                <p> {prod.producto.nombre}</p>
                                <p>Cantidad: {prod.cantidad} </p>
                                <p>Subtotal: $ {prod.producto.precio * prod.cantidad}</p>
                                <hr />
                            </div>
                        ))
                    }
                </div>
                <h3 className="totalOrden">Total: $ {total}</h3>
            </div>

            <form onSubmit={manejadorFormulario} className="contenedorFormulario">

                <div className="formulario">

                    <fieldset className="contenedorCampos">
                        <legend className="formularioTitulo">Ingresa tus datos para confirmar la compra:</legend>
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
                            <label htmlFor="emailConfirmacion">Confirma tu email</label>
                            <input type="email" id="emailConfirmacion" onChange={(e) => setEmailConfirmacion(e.target.value)} />
                        </div>

                        <button className="botonFormulario" type="submit"> Confirmar Compra </button>
                    </fieldset>
                </div>
            </form>
            {
                        ordenId && showSwal(ordenId)
                    }
        </div>
    );
};

export default Checkout;
