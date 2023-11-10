import React from 'react'
import { Card, Stack, CardBody, CardFooter, ButtonGroup, Divider, Heading, Button, Text, Image } from '@chakra-ui/react'
import Item from './Item'
const ItemList = ({ productos }) => {
    return (
        <>
            <div className='cardContainer'>
                {productos.map((p) => {
                    return (
                    <> 
                        <div>
                            <Item p={p}/>
                        </div>
                        {/* <div>
                            <Item p={p}/>
                        </div> */}
                        </>   
                    )
                })
                }
            </div>
        </>
    )
}

export default ItemList