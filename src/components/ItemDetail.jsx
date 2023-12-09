import React, {useState} from 'react'
import { Card, Stack, CardBody, CardFooter, ButtonGroup, Divider, Heading, Text, Center } from '@chakra-ui/react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';

const ItemDetail = ({id, nombre, precio, descripcion, imagen, stock }) => {

    const [agregarCantidad, setAgregarCantidad] = useState(0);

    const {agregarAlCarrito} = useContext (CartContext);

    const manejadorCantidad = (cantidad) => {

            toast.success(`Has agregado ${cantidad} producto/s al carrito`, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });

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
                            <Text color='blackAlpha.800' fontSize='2xl'>
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
            <ToastContainer />
        </div>
    )
}

export default ItemDetail