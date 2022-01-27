import React from 'react';

import { Route, NavLink } from 'react-router-dom';

import Home from './Home';
import AddDog from './AddDog';

const App = () => {
  return (
    <div className='app'>

      <nav>
        <h1>This is the header</h1>
        <div className='nav-links'>
          <NavLink exact to='/'>Home</NavLink>
          <NavLink exact to='/add-dog'>Add Your Dog</NavLink>
        </div>
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
