
import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './Pages/Navbar';
import Register from './Pages/Register';
import Products from './Pages/Products';
import Login from './Pages/Login';
import NoMatch from './Pages/NoMatch';



function App() {

  return (

    <>


      
      <NavBar/>
      <Routes>
      <Route path="*" element={<NoMatch />} />
      <Route path="/" element={<Register />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Products" element={<Products />} />

     </Routes>
 

      
    

 
 </>

   
     
  );
}

export default App;
