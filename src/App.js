import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import CartContextProvider from './components/CartContext';

function App() {
  return (
    <div className="App">
        <CartContextProvider>
        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>} />
          <Route path='/category/:id' element={<ItemListContainer/>} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
        <Footer/>
        </BrowserRouter>
        </CartContextProvider>
    </div>
  );
}

export default App;
