import React from 'react';
import { useState, useEffect } from "react";
import ItemList from './ItemList';
import { useParams } from "react-router-dom";
import {db} from "../firebase/config";
import { collection, getDocs, query, where} from 'firebase/firestore';
import Swal from "sweetalert2";


const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    const idCategoria= useParams().idCategoria;

    useEffect(() => {
        const mostrarProductos = idCategoria ? query(collection(db, "products"), where("categoria","==",idCategoria )) : collection(db,"products");
    // Muestra SweetAlert cuando se cargan los pruductos
        const loadingSwal = Swal.fire({
            title: "Cargando productos",
            didOpen: () => {
                Swal.showLoading();
            },
        });

        getDocs(mostrarProductos)
            .then((resp)=>{
                setProductos(
                    resp.docs.map((doc)=>{
                        return {...doc.data(),id: doc.id}
                    })
                )
            })
            .catch (error=> console.log(error))
            .finally(() => {
                loadingSwal.close(); // Cierra SweetAlert cuando termina de cargar
                setLoading(false);
                });
    }, [idCategoria])

    return (
        <>
            <ItemList productos={productos} />
        </>
    )
}

export default ItemListContainer