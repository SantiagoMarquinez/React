import React from 'react'
import { Card, Stack, CardBody, CardFooter, ButtonGroup, Divider, Heading, Text, Image, Center } from '@chakra-ui/react'
import ItemCount from './ItemCount'

const ItemDetail = ({ nombre, precio, descripcion, imagen }) => {
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
                    <ButtonGroup spacing='2'>
                        <ItemCount />
                    </ButtonGroup>
                </CardFooter>
            </Card>
        </div>
    )
}

export default ItemDetail