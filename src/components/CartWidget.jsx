import React, { useContext } from 'react'
import { BsFillCartFill } from "react-icons/bs";
import { Flex, Spacer, Circle } from '@chakra-ui/react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const {cantidadTotal } = useContext(CartContext)
    return (
        <>
            <Spacer />
            <div className='logoCarrito'>
            <Flex align='center' justify='center'>
                <Link to={'/cart'}>
                <BsFillCartFill />
                </Link>
                {cantidadTotal > 0 && (
                <h3 className='numeroCarrito'>{cantidadTotal}</h3>
                )}
            </Flex>
            </div>
        </>
        );
}

export default CartWidget