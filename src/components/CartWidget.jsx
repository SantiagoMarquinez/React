import React from 'react'
import { BsFillCartFill } from "react-icons/bs";
import { Flex, Spacer } from '@chakra-ui/react';

const CartWidget = () => {
    return (
        <>
            <Spacer />
            <div className='logoCarrito'>
                <h3 className='numeroCarrito'>5</h3>
                <Flex align='center' justify='center'>
                    <BsFillCartFill />
                </Flex>
            </div>
        </>
    )
}

export default CartWidget