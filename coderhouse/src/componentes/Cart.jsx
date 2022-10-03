import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ItemCart from './ItemCart';
import { CartContext } from './UseContext';
import { getFirestore, collection, doc, getDocs, query, where, addDoc } from "firebase/firestore"

const Cart = () => {

    const{ cart, cartTotal } = useContext(CartContext)
    const orden = {
        cliente:{
            nombre: "",
            mail: "",
            tel: "",
            direccion: ""
        },
        items: cart.map((producto => ({id: producto.id, producto: producto.prod, precio: producto.precio, cantidad: producto.cantidad}))),
        total: cartTotal(),
    }


    const handleClick = () => {
        console.log("compra finalizada");
        const db = getFirestore()
        const ordenCollection = collection(db, "orden")
        addDoc(ordenCollection, orden)
        .then(({id}) => console.log(id))
    }

    if(cart.length === 0){
    return(
        <>
            <p>no hay productos seleccionados</p>
           <Link to={'/productos'}> <button>ir a comprar</button></Link>
        </>
    )
}

    return(
        <>
            <div className="row cart">
                {cart.map(el => (
                    <div key={el.id}>
                        <ItemCart 
                        precio={el.precio}
                        img={el.img}
                        categoria={el.marca}
                        prod={el.modelo}
                        cantidad={el.cantidad}
                        id={el.id}
                        />
                    </div>
                ))}
            </div>
            <div className="total">
                <p className='text-center'>total: ${cartTotal()}</p>
            </div>
            <button onClick={handleClick()}>finalizar compra</button>
        </>
    )
}

export default Cart
