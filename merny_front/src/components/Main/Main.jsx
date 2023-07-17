import React from 'react';
import { Router, Route } from 'wouter';
import Home from './Home';
import Title from './Title';
import Stars from './Stars';
import Price from './Price';
import SpecificTitle from './SpecificTitle';
import UndefinedRoute from './UndefinedRoute';

const Main = () => {
  return <main>
    <Router>
      <Route path='/' component={Home}/>
      <Route path='/title' component={Title}/>
      <Route path='/stars' component={Stars}/>
      <Route path='/price' component={Price}/>
      <Route path='/specifictitle' component={SpecificTitle}/>
      <Route path='*' component={UndefinedRoute}/>
    </Router>
  </main>;
};

export default Main;
