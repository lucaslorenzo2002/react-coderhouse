import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getFirestore, collection, doc, getDocs, query, where } from "firebase/firestore"
import '../hojas-de-estilo/itemListContainer.css'
import Item from "./Item";




function ItemListContainer() {


    const[productos, setProductos] = useState([])
    const{categoria} = useParams()
    const{id} = useParams()

    useEffect(() => {
        const db = getFirestore();
        const itemCollection = collection(db, "items");
        const q = id ? query(itemCollection, where("id", "==", id)) : itemCollection
        getDocs(itemCollection).then((res) =>{
            setProductos(res.docs.map((doc)=>({id:doc.id, ...doc.data()})))
    })
    },[])


    return(
        <>
            <h1 className="titulo">ULTIMOS <span>PRODUCTOS</span></h1>
            {productos.length === 0 ? (
                <h3>Cargando...</h3>
            ):(
                <div className="row">
                {productos.map(el => (
                    <div key={el.id} className="col-4">
                    <Item id={el.id}
                      precio={el.precio}  
                      prod={el.modelo}  
                      img={el.img}  />
                </div>
                ))}
                </div>
            )}
                
        </>
    )
}


export default ItemListContainer