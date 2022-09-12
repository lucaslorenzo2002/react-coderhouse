import React from "react";
import ItemCount from "./ItemCount";
import '../hojas-de-estilo/item.css'
 

function Item({id, prod, precio, img}){

    return(
        <>
                    <div className="item">
                    <div className="card">
                    <img src={img} alt/> 
                    </div>
                    <div className="informacion">
                        <p className="text-center">{prod}</p>
                    </div>
                    <div className="precio">
                       <p className="text-center">${precio}</p> 
                    </div> 
                    <ItemCount initial={1} onAdd={0} stock={10} />
                 </div>
        </>
    )
}

export default Item