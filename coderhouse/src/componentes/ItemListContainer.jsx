import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import '../hojas-de-estilo/itemListContainer.css'
import Item from "./Item";




function ItemListContainer() {


    const[productos, setProductos] = useState([])
    const{categoria} = useParams()


    useEffect(() => {
        let filtro = "" 

        if(categoria === "men's clothing"){
            filtro = "hombre"
        }
        else if(categoria === "jewelery"){
            filtro = "joyeria"
        }
        else if(categoria === "electronics"){
            filtro = "electronica"
        }
        else if(categoria === "women's clothing"){
            filtro = "mujer"
        } else{
            filtro = "restablecer"
        }

         let url = 'https://fakestoreapi.com/products'
        fetch(url)
            .then(res=>res.json())
            .then(json=>{
                if(filtro === "restablecer"){
                    setProductos(json)
                }else{
                    const prodFilter = json.filter(el => el.category === categoria)
                    setProductos(prodFilter)
                }
            }) 
    },[categoria])


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
                      precio={el.price}  
                      prod={el.title}  
                      categoria={el.category}
                      img={el.image}  />
                </div>
                ))}
                </div>
            )}
                
        </>
    )
}


export default ItemListContainer