import React from "react";
import { Link } from "react-router-dom";
import '../hojas-de-estilo/item.css'
 

function Item({id, img, prod, precio, categoria}){

    return(
        <>
                    <div key={id} className="item">
                    <div className="card">
                    <img src={img} alt/> 
                    </div>
                    <div className="informacion">
                        <h3 className="titulo text-center">{id}{prod}</h3>
                    </div>
                    <div className="text-center categoria">
                        <h5>{categoria}</h5>
                    </div>
                    <div className="precio">
                       <p className="text-center">${precio}</p> 
                    </div> 
                    <button><Link to={`/producto/${id}`}>Detalles</Link></button>
                 </div>
        </>
    )
}

export default Item
