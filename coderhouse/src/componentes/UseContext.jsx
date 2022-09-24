
import React, { createContext, useState } from 'react';

export const CartContext = createContext()

const CartProvider = ({children}) =>{

    const[cart, setCart] = useState([])
    

    const addToCart = (cantidad, detalle) =>{

         if(isInCart(detalle.id)){
            let producto = cart.find(prod => prod.id === detalle.id);
            cart[cart.indexOf(producto)].cantidad += cantidad ;
            setCart([...cart]);
        } 
           else {
            const producto = {...detalle, cantidad: cantidad}
            setCart([...cart, producto])
        }
    }

        console.log(cart);
        
  
        const clear = () => {
        setCart([])
    }

    const isInCart = (id) =>{
        return cart.some(item => item.id === id)
    }

    const cartTotal = () => {
        return cart.reduce((total, item) => total+=item.cantidad, 0);
    } 

    return(
        <CartContext.Provider value={{ addToCart, cart, clear, cartTotal }}>{children}</CartContext.Provider>
    )
}


export default CartProvider