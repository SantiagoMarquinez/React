import React, { useContext } from 'react'
import { BsFillCartFill } from "react-icons/bs";
import { Flex, Spacer, Circle } from '@chakra-ui/react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const { productosComprados } = useContext(CartContext)
    console.log(productosComprados)
    return (
        <>
            <Spacer />
            <div className='logoCarrito'>
                <h3 className='numeroCarrito'>{productosComprados}</h3>
                <Flex align='center' justify='center'>
                    <Link to={'/cart'}>
                        <BsFillCartFill />
                    </Link>
                </Flex>
            </div>
        </>
    )
}

export default CartWidget