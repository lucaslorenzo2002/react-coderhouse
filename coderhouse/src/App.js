
import './App.css';
import Hero from './componentes/Hero';
import ItemListContainer from './componentes/ItemListContainer';
import Navbar from './componentes/Navbar';
import Item from './componentes/Item';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import Form from './componentes/Form';
import FormContainer from './componentes/FormContainer';
 import{BrowserRouter, Route, Routes, } from "react-router-dom";

import Productos from './componentes/Productos';
import Contacto from './componentes/Contacto';
import Err from './componentes/Err404';
import ItemDetail from './componentes/ItemDetail';
import Cart from './componentes/Cart';
import CartProvider, { CartContext } from './componentes/UseContext';




function App() {
  return (
    <div className="App">
      <CartProvider>
       <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Hero />}/>
        <Route exact path='/productos/' element={<Productos />}/>
        <Route exact path='/productos/:marca' element={<ItemListContainer />}/>
        <Route exact path='/contacto' element={<Contacto />}/>
        <Route exact path='/cart' element={<Cart />}/>
        <Route exact path='/producto/:id' element={<ItemDetailContainer />}/>
        <Route  path='*' element={<Err />}/>
      </Routes>
      </BrowserRouter> 
      </CartProvider>
    </div>
  );
}

export default App;
