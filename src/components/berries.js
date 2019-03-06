import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import BerriesList from './berriesList';
import BerriesDetails from './berriesDetails';

class Berry extends Component
{
    render()
    {
        return (
            <div>
                <Switch>
                    <Route path = "/berries/page/:pageNumber" exact component={BerriesList} />
                    <Route path = "/berries/:id" exact component={BerriesDetails}/>
                </Switch>
            </div>
        )
    }
}

export default Berry;