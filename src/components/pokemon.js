import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PokemonList from './pokemonList';
import PokemonDetails from './pokemonDetails';

class Pokemon extends Component
{
    render()
    {
        return (
            <div>
                <Switch>
                    <Route path = "/pokemon/page/:pageNumber" exact component={PokemonList} />
                    <Route path = "/pokemon/:id" exact component={PokemonDetails} />
                </Switch>
            </div>
        )
    }
}

export default Pokemon;