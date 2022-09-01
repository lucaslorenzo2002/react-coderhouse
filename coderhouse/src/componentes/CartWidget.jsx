import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import '../hojas-de-estilo/cartWidget.css'

function CartWidget (){
    return(
        <>
        <div className="CartWidget">
            <FontAwesomeIcon icon={faCartShopping} />
        </div>
        </>
    )
}

export default CartWidget