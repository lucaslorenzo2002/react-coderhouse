
import './App.css';
import ItemListContainer from './componentes/ItemListContainer';
import Navbar from './componentes/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer marca={"Kavan"}/>
    </div>
  );
}

export default App;
