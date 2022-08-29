import React from "react";
import '../hojas-de-estilo/burgerBtn.css'



function Burger({handleClick}){
    return(
        <>
            <div onClick={handleClick} class="icon nav-icon-5">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </>
    )
}

export default Burger

