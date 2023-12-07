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

                <Button colorScheme='teal' variant='ghost' onClick={decCount}>
                    -
                </Button>

                <Badge colorScheme='purple'>{count}</Badge>

                <Button colorScheme='teal' variant='ghost' onClick={incContador}>
                    +
                </Button>
            </div>
            <div className='classCount'>
                <Button variant='solid' colorScheme='facebook' onClick={()=>funcionAgregar(count)}>Agregar al carrito</Button>
                
            </div>
        </div>
        </>
    )
}


export default ItemCount