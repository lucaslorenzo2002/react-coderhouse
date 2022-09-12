
import './App.css';
import Hero from './componentes/Hero';
import ItemListContainer from './componentes/ItemListContainer';
import Navbar from './componentes/Navbar';
import Item from './componentes/Item';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import Form from './componentes/Form';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <ItemListContainer />
      <ItemDetailContainer />
      <Form />
    </div>
  );
}

export default App;
