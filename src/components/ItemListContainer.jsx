import React from 'react'
import {Text } from '@chakra-ui/react'
const ItemListContainer = ({greeting}) => {
    return (
        <div>
            <Text fontSize='4xl'>
                {greeting}
            </Text>
        </div>
    )
}

export default ItemListContainer