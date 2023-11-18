const Productos = [
    { id: 1, nombre: "Producto 1", precio: 20, categoria: "camisetas" },
    { id: 2, nombre: "Producto 2", precio: 35, categoria: "camperas" },
    { id: 3, nombre: "Producto 3", precio: 48, categoria: "shorts" },
    { id: 4, nombre: "Producto 4", precio: 60, categoria: "medias" },
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Productos);
        }, 500)
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = Productos.find(item => item.id === id);
            resolve(producto);
        }, 500)
    })
}

export const getProdByCat = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = Productos.filter(item => item.categoria === idCategoria);
            resolve(productosCategoria);
        }, 500)
    })
}