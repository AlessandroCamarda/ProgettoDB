import React, { useEffect, useState } from 'react'

//import logo from './logo.svg';
//import './App.css';
import Navbar from './components/Navbar';
//import axios from 'axios';
import Registrazione from './components/Registrazione';
import{BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './components/Login';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar></Navbar>

    <Routes>
      <Route path='/register' element={ <Registrazione />}></Route>
      <Route path='/login' element={ <Login />}></Route>

    </Routes>

    
    
    </BrowserRouter>
         
          
          
    </>
  );
}

export default App;
