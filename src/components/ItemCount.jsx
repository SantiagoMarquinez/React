import React, {useState} from 'react'
import { Button, Badge} from '@chakra-ui/react'

const ItemCount = ({inicial, stock, funcionAgregar}) => {

    const [count, setCount] = useState(inicial);

    const incContador = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }

    const decCount = () => {
        if (count > inicial) {
            setCount(count - 1)
        }
    }

    return (
        <>
        <div className='countContainer'>
            <div className='classCount'>

                <Button colorScheme='blackAlpha.900' variant='ghost' onClick={decCount}>
                    -
                </Button>

                <Badge colorScheme='blackAlpha.900'>{count}</Badge>

                <Button colorScheme='blackAlpha.900' variant='ghost' onClick={incContador}>
                    +
                </Button>
            </div>
            <div className='classCount'>
                <Button variant='solid' colorScheme='blackAlpha' onClick={()=>funcionAgregar(count)}>Agregar al carrito</Button>
                
            </div>
        </div>
        </>
    )
}


export default ItemCount