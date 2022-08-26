import './App.css';

import Navbar from './components/navbar/Navbar';
import ItemListContainer from './components/itemlistcontainer/ItemListContainer';
import url from './img/proteina.jpg';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <section>
        <ItemListContainer dato="proteina" url={url}/> 
      </section>
    </div>
  );
}

export default App;
