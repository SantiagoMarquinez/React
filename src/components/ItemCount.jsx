import React, {useContext, useState} from 'react'
import { Button, Badge, Toast } from '@chakra-ui/react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CartContext } from '../context/CartContext';

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

    // const addCart = () => {
    //     if (count > inicial) {
    //         toast.success(`Has agregado ${count} producto/s al carrito`, {
    //             position: "top-right",
    //             autoClose: 2000,
    //             hideProgressBar: true,
    //             closeOnClick: true,
    //             pauseOnHover: true,
    //             draggable: true,
    //             progress: undefined,
    //             theme: "dark",
    //         });
    //     } else {
    //         toast.error('No has seleccionado ningun producto', {
    //             position: "top-right",
    //             autoClose: 2000,
    //             hideProgressBar: true,
    //             closeOnClick: true,
    //             pauseOnHover: true,
    //             draggable: true,
    //             progress: undefined,
    //             theme: "dark",
    //         });
    //     }
    // }
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
                <ToastContainer />
            </div>
        </div>
        </>
    )
}


export default ItemCount