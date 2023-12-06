import React from 'react';
import { useState, useEffect } from "react";
import ItemList from './ItemList';
import { useParams } from "react-router-dom";
import {db} from "../firebase/config";
import { collection, getDocs, query, where} from 'firebase/firestore';


const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);

    const idCategoria= useParams().idCategoria;

    useEffect(() => {
        const mostrarProductos = idCategoria ? query(collection(db, "products"), where("categoria","==",idCategoria )) : collection(db,"products");

        getDocs(mostrarProductos)
            .then((resp)=>{
                setProductos(
                    resp.docs.map((doc)=>{
                        return {...doc.data(),id: doc.id}
                    })
                )
            })
            .catch (error=> console.log(error))
    }, [idCategoria])

    return (
        <>
            <ItemList productos={productos} />
        </>
    )
}

export default ItemListContainer