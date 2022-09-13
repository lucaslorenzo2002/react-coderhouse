import React from "react";

const ItemDetail = ({id, prod, precio, img}) =>{


    return(
        <>
            <div className="imgContainer">
                <img src={img} alt={prod} />
            </div>
            <div className="detalles">
                <h2 className="text-center">{prod}</h2>
                <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, id.</p>
                <p className="text-center">${precio} </p>
            </div>
        </>
    )
}

export default ItemDetail
