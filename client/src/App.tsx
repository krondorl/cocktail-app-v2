import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Cocktail from './pages/Cocktail';
import Intro from './pages/Intro';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/cocktail' element={<Cocktail />}/>
        <Route path='/' element={<Intro />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
