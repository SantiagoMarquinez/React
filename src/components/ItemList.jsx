import React from 'react'
import Item from './Item'
const ItemList = ({ productos }) => {
    return (
        <>
            <div className='cardContainer'>
            {productos.map(item => <Item key={item.id} {...item} />)}
            </div>
        </>
    )
}

export default ItemList