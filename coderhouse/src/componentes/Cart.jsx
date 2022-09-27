import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ItemCart from './ItemCart';
import { CartContext } from './UseContext';

const Cart = () => {

    const{ cart, cartTotal } = useContext(CartContext)
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
        </>
    )
}

export default Cart
