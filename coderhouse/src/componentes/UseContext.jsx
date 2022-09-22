
import { createContext, useState } from 'react';

export const CartContext = createContext()

const CartProvider = ({children}) =>{

    const[cart, setCart] = useState([])
    

    const addToCart = (item, cantidad) =>{
        if(isInCart(item.id)){
            let producto = cart.find(prod => prod.id === item.id);
            cart[cart.indexOf(producto)].cantidad += cantidad
        }else{
            setCart([...cart, {...item, cantidad: cantidad}])
        }
    }

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
        <CartContext.Provider value={{ cart, addToCart, clear, isInCart, cartTotal } }>{children}</CartContext.Provider>
    )
}


export default CartProvider