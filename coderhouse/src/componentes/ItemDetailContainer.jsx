import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import '../hojas-de-estilo/details.css'
import { json, useParams } from "react-router-dom";


function ItemDetailContainer() {

    const[detalle, setDetalle] = useState([])
    


    const {id} = useParams()

  useEffect(() => {

        fetch('https://fakestoreapi.com/products/' + id)
            .then(res=>res.json())
            .then(json=>{
                setDetalle(json)
                })
            
  },[detalle])

 
    return(
        <>
            <h1 className="titulo">Detalles</h1>
            <div className="row detailsContainer">
                <ItemDetail detalle={detalle} />
                </div>
        </>
    )
}


export default ItemDetailContainer
