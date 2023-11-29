import { createContext } from "react";



export const CartContext = createContext([]);

export const CartProvider=({children})=>{
    const productosComprados=3;

    return (
        <CartContext.Provider value={{productosComprados}}>
            {children}
        </CartContext.Provider>
    )
}