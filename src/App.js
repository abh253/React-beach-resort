import React from "react";
import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home'
import Rooms from './pages/Rooms'
import SingleRoom from './pages/SingleRoom'
import Error from './pages/Error'
import Navbar from './components/Navbar'

const App=()=>{
  return (
    <Router>
      <Navbar/>
      <Routes>
      <Route exact path='/' element={<Home/>}></Route>
      <Route path='/rooms' element={<Rooms/>}></Route>
      <Route path={'/singleRoom/:id'} element={<SingleRoom/>}></Route> 
      <Route path='*' element={<Error/>}></Route>

      </Routes>
    
    </Router>
  );
}

export default App;
