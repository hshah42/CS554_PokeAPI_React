import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import MachineList from './machinesList';
import MachineDetails from './machineDetails';

class  Machine extends Component
{
    render()
    {
        return (
            <div>
                <Switch>
                    <Route path = "/machine/page/:pageNumber" exact component={ MachineList } />
                    <Route path = "/machine/:id" exact component={ MachineDetails } />
                </Switch>
            </div>
        )
    }
}

export default Machine;