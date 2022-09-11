import React, { useState, useEffect } from "react";
import '../hojas-de-estilo/itemListContainer.css'
import ItemCount from "./itemCount";
import ItemDetail from "./itemDetail";
import ItemList from "./itemList";


function ItemDetailContainer() {

    const[producto, setProducto] = useState([])

    useEffect(() => {
        class zapatilla{
            constructor(id, modelo, precio, stock, img){
                this.id = id;
                this.modelo = modelo;
                this.precio = precio;
                this.stock = stock;
                this.img = img;
            }
        }
    
    
        const zapatillas = [];
        zapatillas.push(new zapatilla(1, "Air Jordan 1 OG Dior", 27000, 5, "../img/airjordanog1dior.jpg"))
        zapatillas.push(new zapatilla(2, "Nike de Ben & Jerry’s", 28500, 8, "../img/nikedebenyjerry.jpg"))
        zapatillas.push(new zapatilla(3, "Air Jordan 1 ", 23000, 10, "../img/ajordan1.jpg"))
        zapatillas.push(new zapatilla(4, "New Balance 993" , 21900, 6, "../img/nb993.jpg"))
        zapatillas.push(new zapatilla(5, "Chuck 70" , 17000, 13, "../img/chuck70.jpg"))
        
        

        
const detalle = zapatillas.find((zapa)=> {
    return zapa.id === 1
})


         const promesa = new Promise((resolve, reject) =>{
            setTimeout(() =>{
                resolve(detalle)
            }, 2000)
        }) 
        promesa.then((resultado) =>{
            setProducto(resultado)
        }) 
    },[])

    return(
        <>
            <h1 className="titulo">ULTIMOS <span>PRODUCTOS</span></h1>
            <div>
                <ItemDetail img={producto.img} precio={producto.precio} prod={producto.prod} />
                </div>
        </>
    )
}


export default ItemDetailContainer