import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Pokemon from './components/pokemon';
import Berry from './components/berries';
import Machine from './components/machine';
import NoMatch from './components/notFound'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Pokemons!</h1>
          </header>
          <br/>
          <br/>
          <div className="App-body">
            <h2>Welcome to the PokeDex!</h2>
            <Link className="pokemonLink" to="/pokemon/page/1">
              Pokemon
            </Link>
            <br/>
            <Link className="berriesLink" to="/berries/page/1">
              Berries
            </Link>
            <br/>
            <Link className="machinesLink" to="/machine/page/1">
              Machines
            </Link>
          </div>
          <br/>
          <div>
            <Route path="/pokemon" component = { Pokemon } />
            <Route path="/berries" component = { Berry } />
            <Route path="/machine" component = { Machine } />
            <Route path="/notfound" component={ NoMatch } status = {404}/>

          </div>
      </div>
      </Router>
    );
  }
}

export default App;
