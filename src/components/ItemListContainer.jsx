import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import ItemCount from './ItemCount';
import ItemList from './ItemList';
const ItemListContainer = ({ greeting }) => {
    const productos = [
        { id: 1, nombre: "Producto 1", precio: 20 },
        { id: 2, nombre: "Producto 2", precio: 35 },
        { id: 3, nombre: "Producto 3", precio: 48 },
        { id: 4, nombre: "Producto 4", precio: 60 },
    ]

    const promesa = new Promise((resolve, reject) => {
        if (productos.length > 0) {
            setTimeout(() => {
                resolve(productos);
            }, 3000);
        } else {
            reject("Error: no se encontraron productos");
        }
    });
    promesa
        .then((resultado) => {
            console.log(resultado)
        })
        .catch((error) => {
            console.log(error)
        });
    return (
        <div>
            <Flex align='center' justify='center'>
                <Text fontSize='4xl'>
                    {greeting}
                </Text>
            </Flex>
            <div className='cardContainer'>
                <ItemList productos={productos} />
            </div>
            <ItemCount />
        </div>
    )
}

export default ItemListContainer