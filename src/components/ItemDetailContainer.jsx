import React, { useState, useEffect} from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import{doc, getDoc} from "firebase/firestore"
import{db} from "../firebase/config"
// import { getUnProducto } from "../asyncmock";

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);
    // const {idItem} = useParams();
    const idItem = useParams().idItem;

    useEffect(() => {
        const docRef= doc(db,"products", idItem);
        getDoc(docRef)
            .then((resp)=>{
                setProducto (
                    {...resp.data(), idItem: resp.idItem}
                    )
            })
        // getUnProducto(idItem)
        //     .then(respuesta => setProducto(respuesta))
    }, [idItem])
    
    return (
        <div className='cardContainer'>
            {producto ? <ItemDetail {...producto} />: <p>Producto no encontrado</p>}
        </div>
    )
}

export default ItemDetailContainer