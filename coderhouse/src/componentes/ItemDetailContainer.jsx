import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import '../hojas-de-estilo/details.css'
import { getFirestore, doc, getDoc } from "firebase/firestore"

import { json, useParams } from "react-router-dom";


function ItemDetailContainer() {

    const[detalle, setDetalle] = useState({})
    const {id} = useParams()

  useEffect(() => {
    const db = getFirestore();
    const item = doc(db, "items", id)
    getDoc(item).then(res => setDetalle({id: res.id, ...res.data()}))    
  },[])

 
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
