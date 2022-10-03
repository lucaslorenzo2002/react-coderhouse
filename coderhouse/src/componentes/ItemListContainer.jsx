import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getFirestore, collection, doc, getDocs, query, where } from "firebase/firestore"
import '../hojas-de-estilo/itemListContainer.css'
import Item from "./Item";




function ItemListContainer() {


    const[productos, setProductos] = useState([])
    const{marca} = useParams()

    useEffect(() => {
        const db = getFirestore();
        const itemCollection = collection(db, "items");
        const ref = marca
        ? query(itemCollection, where("marca", "==", marca))
        : itemCollection
        getDocs(ref).then((res) =>{
            setProductos(res.docs.map((doc)=>({id:doc.id, ...doc.data()})))
    })
    },[marca])


    return(
        <>
            <h1 className="titulo">ULTIMOS <span>PRODUCTOS</span></h1>
            {productos.length === 0 ? (
                <h3>Cargando...</h3>
            ):(
                <div className="row item-container">
                    <button className="col-3"><Link to={`/productos/jordan`}>Jordan</Link></button>
                    <button className="col-3"><Link to={`/productos/new balance`}>New Balance</Link></button>
                    <button className="col-3"><Link to={`/productos/converse`}>Converse</Link></button>
                    <button className="col-3"><Link to={`/productos/nike`}>Nike</Link></button>
                {productos.map(el => (
                    <div key={el.id} className="col-4">
                    <Item id={el.id}
                      precio={el.precio}  
                      prod={el.modelo}  
                      img={el.img}
                      marca={el.marca}  />
                </div>
                ))}
                </div>
            )}
                
        </>
    )
}


export default ItemListContainer