import React, { useState, useEffect} from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import{db} from "../firebase/config";
import{doc, getDoc} from "firebase/firestore";



const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);
    const {idItem} = useParams();

    useEffect(() => {
        const docRef= doc(db,"products", idItem);
        getDoc(docRef)
            .then((resp)=>{
                setProducto (
                    {...resp.data(), idItem: resp.idItem}
                    );
            })
            .catch( error=>console.log(error))
    }, [idItem])
    
    return (
        <div className='cardContainer'>
            {producto ? <ItemDetail {...producto} />: <p>Producto no encontrado</p>}
        </div>
    )
}

export default ItemDetailContainer