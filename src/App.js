import React from 'react';

import { Route, NavLink } from 'react-router-dom';

import Home from './Home';
import AddDog from './AddDog';
import './App.css';

const App = () => {
  return (
    <div className='app'>
      <nav>
        <div className='nav-links'>
          <NavLink className='link' exact to='/'>Home</NavLink>
          <NavLink className='link' exact to='/add-dog'>Add Your Dog</NavLink>
        </div>
        <h1>Doggo Wisdom </h1>
      </nav>

        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/add-dog'>
          <AddDog />
        </Route>

    </div>
  )
}

export default App;
