import { Route,  Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home'
import Category from './Pages/Category';
import Footer from './Components/Footer';
import Productlist from './Components/Productlist';
import Productdetails from './Components/Productdetails';


function App() {
  return (
    <>
     
     <Navbar/>
          
          <Routes>
            <Route path="/"  element={<Home/>}/>
            <Route path="/category" element={<Category/>}/>
            <Route path="/product-list" element={<Productlist/>}/>
            <Route path="/product-Details" element={<Productdetails/>}/>
          </Routes>
          
    
      <Footer/>
    </>
  );
}

export default App;
