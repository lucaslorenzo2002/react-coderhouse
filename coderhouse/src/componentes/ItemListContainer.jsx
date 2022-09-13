import React, { useState, useEffect } from "react";
import '../hojas-de-estilo/itemListContainer.css'
import ItemList from "./ItemList";



function ItemListContainer() {


    const[zapatillas, setZapatillas] = useState([])

    useEffect(() => {
       const getZapatillas = (async(url) => {
        let res = await fetch (url),
        json = await res.json();
    
        json.forEach(async(el) => {
            let res = await fetch(el.url),
            json = await res.json();
            let zapatilla = {
                id: json.id,
                modelo: json.modelo,
                stock: json.stock,
                img: json.img,
                precio: json.precio
            }
            setZapatillas((zapatillas) => [...zapatillas, zapatilla])
        }) 
       })

       getZapatillas("../data/zapatillas.json")
    },[])

    return(
        <>
            <h1 className="titulo">ULTIMOS <span>PRODUCTOS</span></h1>
            <div>
                <ItemList productos={zapatillas} />
                </div>
        </>
    )
}


export default ItemListContainer