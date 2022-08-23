import './App.css';

import Navbar from './components/navbar/Navbar';
import ItemListContainer from './components/itemlistcontainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <section>
        <ItemListContainer dato="proteina" url="https://farmacityar.vteximg.com.br/arquivos/ids/187884-1000-1000/209799_suplemento-deportivo-ena-proteina-de-chocolate-x-25-gr_imagen-1.jpg?v=637025063165770000"/> 
      </section>
      
    </div>
  );
}

export default App;
