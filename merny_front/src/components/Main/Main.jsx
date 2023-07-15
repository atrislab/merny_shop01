import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './Home';
import Title from './Title';
import Stars from './Stars';
import Price from './Price';
import UndefinedRoute from './UndefinedRoute';




const Main = () => {
  return <main>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/title' element={<Title />}/>
        <Route path='/stars' element={<Stars />}/>
        <Route path='/price' element={<Price />}/>
        <Route path='*' element={<UndefinedRoute />}/>

      </Routes>
    </BrowserRouter>

  </main>;
};

export default Main;