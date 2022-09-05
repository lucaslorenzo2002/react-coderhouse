import React, { useState } from "react";
import '../hojas-de-estilo/itemListContainer.css'
import zapa2 from '../img/zapatillas-2.png' 
import ItemCount from "./itemCount";



function ItemListContainer() {

    return(
        <>
            <div className="row">
            <h1 className="titulo">ULTIMOS <span>PRODUCTOS</span></h1>
                <div className="col-12">
                    <div className="item">
                    <div className="card">
                    <img src={zapa2} alt="zapatilla 2"/> 
                    </div>
                    <div className="informacion">
                        <p className="text-center">Nike Air Force</p>
                    </div>
                    <div className="precio">
                       <p className="text-center">$13500</p> 
                    </div>
                    <ItemCount initial={1} onAdd={0} stock={10} />
                </div>
                </div>
                </div>
        </>
    )
}


export default ItemListContainer