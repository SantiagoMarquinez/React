const Productos = [
    { id: 1, nombre: "Camiseta alternativa 2023", precio: 19000, categoria: "camisetas", descripcion: "Camiseta alternativa 2023, color blanco", imagen:"https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw90939453/products/NI_CK9891-100/NI_CK9891-100-1.JPG" },
    { id: 2, nombre: "Camiseta alternativa 2023 negra", precio: 35, categoria: "camisetas", descripcion:"Camiseta alternativa 2023, color negro y dorado", imagen:"https://afaar.vtexassets.com/arquivos/ids/156100-500-auto?v=638188900824070000&width=500&height=auto&aspect=true" },
    { id: 3, nombre: "Short Blanco 2023", precio: 48, categoria: "shorts", descripcion:"Short 2023, color blanco",imagen:"https://afaar.vtexassets.com/arquivos/ids/156238/short-camiseta-blanco-2023.jpg?v=638267556345030000" },
    { id: 4, nombre: "Camiseta 2023", precio: 60, categoria: "camisetas", descripcion:"Camiseta titular 2023, color azul y rojo tradicional",imagen:"https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw217677f4/products/NICK9892-490/NICK9892-490-1.JPG" },
    { id: 5, nombre: "Short negro 2023", precio: 65, categoria: "shorts", descripcion:"Short alternativo 2023, color negro",imagen:"https://latinafy.com/cdn/shop/files/short-nike-3ra-edicion-san-lorenzo-de-almagro-2023_1200x1200_crop_center.jpg?v=1687194771" },
    { id: 6, nombre: "Buzo Nike 2023", precio: 55, categoria: "buzos", descripcion:"Buzo Nike 2023, color azul",imagen:"https://afaar.vtexassets.com/arquivos/ids/156406/WhatsApp-Image-2023-09-28-at-12.11.44.jpg?v=638315285858000000" },
    { id: 7, nombre: "Campera Nike 2023", precio: 72, categoria: "camperas", descripcion:"Campera nike media estacion, color azul con escudo redondo en blanco",imagen:"https://afaar.vtexassets.com/arquivos/ids/156403-500-auto?v=638315198328970000&width=500&height=auto&aspect=true" },
    { id: 8, nombre: "Camperon Nike 2023", precio: 39, categoria: "camperas", descripcion:"Camperon Nike 2023, color azul con escudo redondo blanco",imagen:"https://http2.mlstatic.com/D_NQ_NP_827225-MLA31604193037_072019-O.webp" },
    { id: 9, nombre: "Campera Nike 2023", precio: 43, categoria: "camperas", descripcion:"Campera Nike 2023, de joggin, color azul, con escudo original ",imagen:"https://marcadegol.com/fotos//2017/02/ropa-de-entrenamiento-nike-de-san-lorenzo-2017-buzo-capucha.jpg" },
    { id: 10, nombre: "Buzo retro", precio: 85, categoria: "buzos", descripcion:"Buzo retro Adidas, azul, rojo y blanco, con escudo redondo",imagen:"https://d22fxaf9t8d39k.cloudfront.net/63ec92cfc065ed2b3d76e2ffd389561a52c484eae8fa0803f412d0072fdaaae428135.jpg" },

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