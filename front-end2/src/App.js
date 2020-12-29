import { useState, useEffect, useRef } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import './App.css';
import Index from './Components/Index/Index.js'
import Movies from './Components/Movies/Movies.js'
import Favorites from './Components/Favorites/Favorites.js'

function App() {
  return (
    <div className="App">
      <title>Movie Finder</title>
      <nav>
        <div className="nav-links">
          <Link to ='/'>Home</Link>
          <Link to ='/movies'>Movie Finder</Link>
          <Link to ='/favorites'>Favorites</Link>
        </div>
      </nav>
      <Switch>
        <Route exact path='/' component={Index} />
        <Route path='/movies' component={Movies}/>
        <Route path='/Favorites' component={Favorites}/>
      </Switch>
    </div>
  );
}

export default App;
