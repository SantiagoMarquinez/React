import React, {useState} from 'react'
import { Card, Stack, CardBody, CardFooter, ButtonGroup, Divider, Heading, Text, Image, Center } from '@chakra-ui/react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';

const ItemDetail = ({id, nombre, precio, descripcion, imagen, stock }) => {

    const [agregarCantidad, setAgregarCantidad] = useState(0);

    const {agregarAlCarrito} = useContext (CartContext);

    const manejadorCantidad = (cantidad) => {
        setAgregarCantidad(cantidad);

        const producto ={id, nombre, precio};
        agregarAlCarrito(producto, cantidad);
    }

    return (
        <div>
            <Card maxW='sm' m='5'>
                <CardBody>
                    <img className='cardImg' src={imagen} alt="" />
                    <Stack mt='6' spacing='3'>
                        <Center><Heading size='md'>{nombre}</Heading></Center>
                        <Text textAlign={['center']}>
                            {descripcion}
                        </Text>
                        <Center>
                            <Text color='blue.600' fontSize='2xl'>
                                ${precio}
                            </Text>
                        </Center>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    {
                    agregarCantidad > 0 ? (<Link to="/cart">Ir al carrito</Link>) : (<ButtonGroup spacing='2'>
                        <ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>
                    </ButtonGroup>)}

                </CardFooter>
            </Card>
        </div>
    )
}

export default ItemDetail