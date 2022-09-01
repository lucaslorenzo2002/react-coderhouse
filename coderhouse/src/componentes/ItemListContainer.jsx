import React from "react";
import '../hojas-de-estilo/itemListContainer.css'

function ItemListContainer({marca}) {
    return(
        <>
            <h1 className="titulo">Bienvenido a {marca}!</h1>
        </>
    )
}

export default ItemListContainer