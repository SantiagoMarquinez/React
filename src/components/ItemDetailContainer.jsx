import React, { useState, useEffect} from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { getUnProducto } from "../asyncmock";

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);
    const {idItem} = useParams();

    useEffect(() => {
        getUnProducto(idItem)
            .then(respuesta => setProducto(respuesta))
    }, [idItem])
    
    return (
        <div className='cardContainer'>
            < ItemDetail {...producto} />
        </div>
    )
}

export default ItemDetailContainer