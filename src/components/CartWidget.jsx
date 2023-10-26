import React from 'react'
import { BsFillCartFill } from "react-icons/bs";
import { Menu, MenuButton, MenuList, MenuItem, Flex, Box, Spacer } from '@chakra-ui/react';

const CartWidget = () => {
    return (
        <>
        <Spacer/>
            <div>
                <h3>5</h3>
                <BsFillCartFill />
            </div>
        </>
    )
}

export default CartWidget