import './App.css';
import Login from './components/Login';
import Electronics from './components/Electronics';
import Jewelery from './components/Jewelery';
import Layout from './components/Layout.JS';
// import Mens_clothing from './components/Mens_clothing';
// import Womens_clothing from './components/Womens_clothing';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from './components/Home';
{/* <Login/> */}
let p =()=>{console.log("sagar")}
log

function App(s) {
  
  return (<>

  <h1> SAGAR</h1>
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<Login />} />
  {/* <Route index element={<Home/>}/> */}
  </Routes>
  </BrowserRouter>


  
  </>);
}

export default App;
