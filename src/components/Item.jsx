import React from 'react'
import { Card, Stack, CardBody, CardFooter, ButtonGroup, Divider, Heading, Button, Text} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
const Item = ({id,nombre,precio, imagen}) => {
    return (
        <div className='card'>
            <Card maxW='sm' m='5'>
                <CardBody>
                    <img className='cardImg' src={imagen} alt="" />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>{nombre}</Heading>
                        <Text color='blackAlpha.800' fontSize='2xl'>
                            ${precio}
                        </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <ButtonGroup spacing='2'>
                        <Link to={`/item/${id}`}>
                            <Button variant='solid' colorScheme='blackAlpha'>
                                Detalles
                            </Button>
                        </Link>
                    </ButtonGroup>
                </CardFooter>
            </Card>
        </div>
    )
}

export default Item