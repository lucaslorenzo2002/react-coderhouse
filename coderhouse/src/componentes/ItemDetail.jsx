import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({detalle}) =>{


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
                <ItemCount initial={1} onAdd={0} stock={10} />
            
            </div>
        </>
    )
}

export default ItemDetail
