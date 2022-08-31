import './App.css';

import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <section>
        <ItemListContainer/> 
      </section>
    </div>
  );
}

export default App;
