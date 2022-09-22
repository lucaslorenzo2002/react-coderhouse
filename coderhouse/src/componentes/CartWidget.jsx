import React, { useContext } from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import '../hojas-de-estilo/cartWidget.css'
import { CartContext } from "./UseContext";

function CartWidget (){
    const{ clear} = useContext(CartContext)
    return(
        <>
        <div className="CartWidget">
            <button type="button" onClick={()=> {clear()}}>vaciar</button>
            <FontAwesomeIcon icon={faCartShopping} />
        </div>
        </>
    )
}

export default CartWidget