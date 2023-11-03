import React from 'react'

const ItemList = ({productos}) => {
    return (
        <>
            <div>ItemList</div>
            <div>
                {productos.map((p) => {
                    return (
                        <div key={p.id}>
                            <h2>Producto: {p.nombre}</h2>
                            <h4>$ {p.precio}</h4>
                        </div>
                    )
                })
                }
            </div>
        </>
    )
}

export default ItemList