import React from 'react'
import { Flex, Text } from '@chakra-ui/react'
const ItemListContainer = ({ greeting }) => {
    return (
        <div>
            <Flex align='center'justify='center'>
                <Text fontSize='4xl'>
                    {greeting}
                </Text>
            </Flex>
        </div>
    )
}

export default ItemListContainer