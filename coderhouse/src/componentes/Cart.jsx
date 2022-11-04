import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCart from './ItemCart';
import { CartContext } from './UseContext';
import { getFirestore, collection, addDoc } from "firebase/firestore"


const initial = {
    nombre: "",
    email: "",
    telefono: ""
}
const Cart = () => {

    const{ cart, cartTotal } = useContext(CartContext)

    

    const[form, setForm] = useState(initial)
    const[orderId, setOrderId] = useState("")

    const handleChange = (e) =>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }


    const order = {
        cliente:{
            nombre: form.nombre,
            mail: form.email,
            tel: form.telefono,
        },
        items: cart.map((producto => (
            {id: producto.id, producto: producto.prod, precio: producto.precio, cantidad: producto.cantidad}
            ))),
        total: cartTotal(),
        
    } 


     const handleSubmit =  (e) =>{
         e.preventDefault()
         if( !form.nombre || !form.telefono || !form.email){
            alert("datos incompletos")
            return;
        }
        
        const db = getFirestore()
        const ordenCollection = collection(db, "orden")
         addDoc(ordenCollection, order)
        .then(({id}) => 
        console.log(id)
    ) 
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
                    <div className='col-6' key={el.id}>
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
            <form  onSubmit={handleSubmit} >
            <div>
            <input type="text" name="nombre" placeholder="ingrese su nombre"  value={form.nombre} onChange={handleChange}/>
            <input type="email" name="email" placeholder="ingrese su email"  value={form.email} onChange={handleChange}/>
            <input type="tel" name="telefono" placeholder="ingrese su telefono"  value={form.telefono} onChange={handleChange}/>
            </div>
            <input  className="subBtn" type="submit" value="finalizar compra" />
            </form> 
            
        </>
    )
}

export default Cart
