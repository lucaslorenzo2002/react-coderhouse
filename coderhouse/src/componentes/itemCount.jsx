import React,{ useState } from "react";
import '../hojas-de-estilo/itemCount.css'

function ItemCount ({stock, onAdd, initial}){

    const[items, setItems] = useState(initial)
    const[itemStock, setItemStock] = useState(stock)
    const[itemOnAdd, setItemOnAdd] = useState(onAdd)
    
    const quitar = (value) => {
        if(value > -1){
            setItems(value)
        }
    }

    const agregar = (value) => {
        if(value <= itemStock){
            setItems(value)
        }
    }
    const agregarItem = () =>{
        if(items <= itemStock){
            setItemStock(itemStock - items)
            setItemOnAdd(itemOnAdd + items)
        }
    }

    return(
        <>
        <div className="cantidad">
        <input type="button" className="btn btn-secondary" value="-" onClick={() => {quitar(items - 1)}} />
        <input type="text" className="form-control" value={items}/>
        <input type="button" className="btn btn-secondary" value="+" onClick= {()=> {agregar(items + 1)}} />
        <input type="button" className="btn btn-secondary" value="agregar" onClick= {() => {agregarItem ()}} />
    </div>
        <p>productos seleccionados: {itemOnAdd}</p>
        </>
    )
}

export default ItemCount