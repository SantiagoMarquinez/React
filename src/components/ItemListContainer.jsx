import React from 'react';
import { useState, useEffect } from "react";
// import { getProductos, getProdByCat } from "../asyncmock";
import ItemList from './ItemList';
import { useParams } from "react-router-dom";
import { collection, getDocs } from 'firebase/firestore';
import {db} from "../firebase/config"

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);

    const { idCategoria } = useParams();

    useEffect(() => {
        const productosRef = collection(db, "products");

        getDocs(productosRef)
            .then((resp)=>{
                setProductos(
                    resp.docs.map((doc)=>{
                        return {...doc.data(),id: doc.id}
                    })
                )
            })


        // const funcionProductos = idCategoria ? getProdByCat : getProductos;

        // funcionProductos(idCategoria)
        //     .then(res => setProductos(res))

    }, [idCategoria])

    return (
        <>
            <ItemList productos={productos} />
        </>
    )
}

export default ItemListContainer