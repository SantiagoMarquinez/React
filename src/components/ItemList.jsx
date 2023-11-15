import React from 'react'
import Item from './Item'
const ItemList = ({ productos }) => {
    return (
        <>
            <div className='cardContainer'>
                {productos.map((p) => {
                    return (
                    
                        <div key={p.id}>
                            <Item p={p}/>
                        </div>  
                    )
                })
                }
            </div>
        </>
    )
}

export default ItemList