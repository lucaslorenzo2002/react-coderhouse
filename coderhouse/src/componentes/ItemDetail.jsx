import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import ItemCount from "./ItemCount";
import CartProvider, { CartContext } from "./UseContext";


const ItemDetail = ({detalle}) =>{

   const {addToCart} = useContext(CartContext)

    const [goToCart, setGoToCart] = useState(false)
    
    
    const confirmar = () =>{
        setGoToCart(true)
        }

    const onAdd = (cantidad) =>{
        //setCantidad(cantidad)
       addToCart(cantidad, detalle)
    }



    return(
        <>
            <div key={detalle.id}>
            <div className="imgContainer">
                <img src={detalle.image} alt="" />
            </div>
            <div className="detalles">
                <h2 className="text-center">{detalle.title}</h2>
                <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
                 Quaerat animi alias eos ad explicabo rerum! <br />
                 Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
                 Consectetur in quo natus nesciunt voluptatibus dicta.
                 </p>
                <p className="text-center">${detalle.price} </p>
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
