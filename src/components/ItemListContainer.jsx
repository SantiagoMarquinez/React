import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import ItemList from './ItemList';

const ItemListContainer = () => {
    const productos = [
        { id: 1, nombre: "Producto 1", precio: 20, categoria:"camisetas" },
        { id: 2, nombre: "Producto 2", precio: 35, categoria:"camperas" },
        { id: 3, nombre: "Producto 3", precio: 48, categoria:"short" },
        { id: 4, nombre: "Producto 4", precio: 60, categoria:"medias" },
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
                    Cuervo Store
                </Text>
            </Flex>
            <div className='cardContainer'>
                <ItemList productos={productos} />
            </div>
        </div>
    )
}

export default ItemListContainer