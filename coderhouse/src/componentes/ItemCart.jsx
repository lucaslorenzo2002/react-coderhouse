import React, { useContext } from 'react';
import '../hojas-de-estilo/cart.css'
import { CartContext } from './UseContext';


const ItemCart = ({img, id, prod, precio, categoria, cantidad}) =>{
    const{ removeProduct } = useContext(CartContext)
    return(
        <>
        <div key={id} className="itemCart">
                    <div className="itemCard">
                    <img src={img} alt/> 
                    </div>
                    <div className="itemInfo">
                        <h3 className="titulo text-center">{prod}</h3>
                    </div>
                    <div className="text-center categoria">
                        <h5>{categoria}</h5>
                    </div>
                    <div className="cantidad">
                       <p className="text-center">unidades: {cantidad}</p> 
                    </div> 
                    <div className="precio">
                       <p className="text-center">subtotal: ${precio * cantidad}</p> 
                    </div> 
                    <button onClick={()=> removeProduct(id)} className='text-center'>eliminar</button>
                 </div>
        </>
    )
}
export default ItemCart