
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

        
        
  
        const clear = () => {
        setCart([])
    }

    const isInCart = (id) =>{
        return cart.some(item => item.id === id)
    }

    const cartTotal = () => {
        return cart.reduce((total, item) => total += item.cantidad * item.precio, 0);
    } 
    

    const widgetTotal = () => {
        const copia = {...cart}
     let count = 0;
     copia.forEach((producto) =>{
         count = count + producto.cantidad
     })
     return count
    }
    
    
    const removeProduct = (id) => setCart(cart.filter(product => product.id !== id)) 

    return(
        <CartContext.Provider value={{ addToCart, clear, cartTotal, widgetTotal, removeProduct, cart }}>{children}</CartContext.Provider>
    )
}


export default CartProvider