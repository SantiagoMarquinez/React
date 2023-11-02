import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
const ItemListContainer = ({ greeting }) => {
    const productos = [
        { id: 1, nombre: "Producto 1", precio: 20 },
        { id: 2, nombre: "Producto 2", precio: 35 },
        { id: 3, nombre: "Producto 3", precio: 48 },
        { id: 4, nombre: "Producto 4", precio: 60 },
    ]
    const validacion = true;
    const promesa = new Promise((resolve, reject) => {
        if (validacion) {
            setTimeout(() => {
                resolve("Productos validados");
                console.log(productos);
            }, 3000);
        } else {
            reject("Error en la consulta");
        }
    });
    promesa
    .then((resultado) =>{
        console.log(resultado)
    })
    .catch((error) =>{
        console.log(error)
    });
    return (
        <div>
            <Flex align='center' justify='center'>
                <Text fontSize='4xl'>
                    {greeting}
                </Text>
            </Flex>
        </div>
    )
}

export default ItemListContainer