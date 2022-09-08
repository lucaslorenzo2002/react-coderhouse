import React from "react";
import Item from './item';

function ItemList({productos}){
    return(
        <>
            <div  className="itemContainer">
                {productos.map(producto => <Item id={producto.id} prod={producto.modelo} precio={producto.precio} img={producto.img} />)}
            </div>
        </>
    )

    }
export default ItemList