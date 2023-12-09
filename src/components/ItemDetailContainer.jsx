import React, { useState, useEffect} from 'react';
import ItemDetail from './ItemDetail';
import { useParams, Link } from 'react-router-dom';
import{db} from "../firebase/config";
import{doc, getDoc} from "firebase/firestore";
import Swal from 'sweetalert2'



const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);
    const [loading, setLoading] = useState(true);
    const {idItem} = useParams();

    useEffect(() => {
        const docRef= doc(db,"products", idItem);
        getDoc(docRef)
            .then((resp)=>{
                setProducto (
                    {...resp.data(), idItem: resp.idItem}
                    );
            })
            .catch( error=>{
                Swal.fire({
                    icon: "error",
                    title: "Algo salió mal",
                    text: "No encontramos el producto :( ",
                });
            })
            .finally(()=> setLoading(false))
    }, [idItem])
    
    return (
        <div className='cardContainer'>
            {!loading ? (producto ? <ItemDetail {...producto} /> : <Link to={'/'}><h3 className='productoNoEncontrado'>Volver</h3></Link>
            ) : (<p style={{color: '#fff'}}>Cargando</p>)}
        </div>
    )
}

export default ItemDetailContainer

