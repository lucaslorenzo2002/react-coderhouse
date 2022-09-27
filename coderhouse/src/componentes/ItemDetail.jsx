import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import ItemCount from "./ItemCount";
import CartProvider, { CartContext } from "./UseContext";


const ItemDetail = ({detalle}) =>{

   const {addToCart, cartTotal, widgetTotal} = useContext(CartContext)

    const [goToCart, setGoToCart] = useState(false)
    
    
    const confirmar = () =>{
        setGoToCart(true)
        }

    const onAdd = (cantidad) =>{
        addToCart(cantidad, detalle);
        cartTotal(cantidad) 
    }



    return(
        <>
            <div key={detalle.id}>
                <img src={detalle.img} alt="" />
            <div className="detalles">
                <h1 className="text-center">{detalle.marca}</h1>
                <h3 className="text-center">{detalle.modelo}</h3>
                <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
                 Quaerat animi alias eos ad explicabo rerum! <br />
                 Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
                 Consectetur in quo natus nesciunt voluptatibus dicta.
                 </p>
                <p className="text-center">${detalle.precio} </p>
                </div>
                <div className="count">
                {goToCart ? <button><Link to={'/cart'}>ir al carrito</Link></button> : <ItemCount initial={1} stock={10} onAdd={onAdd} /> }
                <button onClick={confirmar}>Confirmar</button>
                </div>
            
            </div>
        </>
    )
}

export default ItemDetail
