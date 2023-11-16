import React, { useState, useEffect } from 'react';
import { Flex, Text } from '@chakra-ui/react';
import ItemCount from './ItemCount';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = ({ id }) => {
    const [producto, setProducto] = useState(null);

    const productos = [
        { id: 1, nombre: "Producto 1", precio: 20, categoria: "camisetas" },
        { id: 2, nombre: "Producto 2", precio: 35, categoria: "camperas" },
        { id: 3, nombre: "Producto 3", precio: 48, categoria: "short" },
        { id: 4, nombre: "Producto 4", precio: 60, categoria: "medias" },
    ];

    useEffect(() => {
        const buscarProducto = () => {
            return productos.find((p) => p.id === parseInt(id));
        };

        const productoEncontrado = buscarProducto();

        if (productoEncontrado) {
            setProducto(productoEncontrado);
        } else {
            console.log(`No se encontró el producto`);
        }
    }, [id, productos]);

    return (
        <div>
            <Flex align='center' justify='center'>
                <Text fontSize='4xl'>
                    ItemDetailContainer
                </Text>
            </Flex>
            <div className='cardContainer'>
                {producto ? (
                    <ItemDetail p={producto} />
                ) : (
                    <p className='error'>No se encontró el producto </p>
                    
                )}
            </div>
            <ItemCount />
        </div>
    );
};

export default ItemDetailContainer;