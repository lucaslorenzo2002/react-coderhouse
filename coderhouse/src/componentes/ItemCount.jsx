import React,{ useContext, useEffect, useState } from "react";
import '../hojas-de-estilo/itemCount.css'
import { CartContext } from "./UseContext";

function ItemCount ({stock, initial, onAdd}){

    
    const [cantidad, setCantidad] = useState(initial)


    const[itemStock, setItemStock] = useState(stock)

    
    const decrementar = (value) => {
        if(value > -1){
            setCantidad(value)
        }
    }

    const incrementar = (value) => {
        if(value <= itemStock){
            setCantidad(value)
        }
    }
  

    

    return(
        <>
        <div className="cantidad">
        <input type="button" className="btn btn-secondary" value="-" onClick={() => {decrementar(cantidad - 1)}} />
        <input type="text" className="form-control" value={cantidad}/>
        <input type="button" className="btn btn-secondary" value="+" onClick= {()=> {incrementar(cantidad + 1)}} />
        <button onClick={()=> onAdd(cantidad)}>agregar</button>
    </div>
        </>
    )
}

export default ItemCount
