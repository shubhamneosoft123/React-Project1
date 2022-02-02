import './App.css';
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Addemployee from './components/Addemployee';
import Editemployee from './components/Editemployee';
import Products from './components/Products'
import CartDetails from './components/CartDetails';


function App() {
  return (
    <main>
     <Router>
     <header>
       <Nav/>
     </header>
     <section className='container'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/addemployee" element={<Addemployee/>}/>
        <Route path="/editemployee/:id" element={<Editemployee/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/cart" element={<CartDetails/>}/>
        
        
        
      </Routes>
     </section>
     </Router>
   </main>
  );
}

export default App;
