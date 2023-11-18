const Productos = [
    { id: 1, nombre: "Producto 1", precio: 20, categoria: "camisetas" },
    { id: 2, nombre: "Producto 2", precio: 35, categoria: "camperas" },
    { id: 3, nombre: "Producto 3", precio: 48, categoria: "shorts" },
    { id: 4, nombre: "Producto 4", precio: 60, categoria: "medias" },
    { id: 5, nombre: "Producto 5", precio: 65, categoria: "medias" },
    { id: 6, nombre: "Producto 6", precio: 55, categoria: "camisetas" },
    { id: 7, nombre: "Producto 7", precio: 72, categoria: "shorts" },
    { id: 8, nombre: "Producto 8", precio: 39, categoria: "medias" },
    { id: 9, nombre: "Producto 9", precio: 43, categoria: "camisetas" },
    { id: 10, nombre: "Producto 10", precio: 85, categoria: "camperas" },

]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Productos);
        }, 500)
    })
}

export const getUnProducto = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            // Convert idItem to number
            const itemId = parseInt(id, 10);
            const producto = Productos.find((item) => item.id === itemId);
            resolve(producto);
        }, 500);
    });
};


export const getProdByCat = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = Productos.filter(item => item.categoria === idCategoria);
            resolve(productosCategoria);
        }, 500)
    })
}