import React from "react";

const ItemDetail = ({id, prod, precio, img}) =>{


    return(
        <>
            <div className="imgContainer">
                <img src={img} alt={prod} />
            </div>
            <div className="detalles">
                <h2>{prod}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, id.</p>
                <p>{precio} </p>
            </div>
        </>
    )
}

export default ItemDetail