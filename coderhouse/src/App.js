
import './App.css';
import Hero from './componentes/hero';
import ItemListContainer from './componentes/ItemListContainer';
import Navbar from './componentes/Navbar';
import Item from './componentes/item';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <ItemListContainer />
    </div>
  );
}

export default App;
