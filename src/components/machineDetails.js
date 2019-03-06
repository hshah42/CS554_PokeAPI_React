import React, { Component } from 'react';
import axios from 'axios';

class MachineDetails extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            data: undefined,
            status: undefined
        }
    }

    async getMachineData()
    {
        try
        {
            const response = await axios.get("https://pokeapi.co/api/v2/machine/" + this.props.match.params.id);
            this.setState({ data: response.data });
        }
        catch(e)
        {
            console.log(e);
        }
    }

    componentDidMount()
    {
        this.getMachineData();
    }

    render()
    {
        let title = this.state.data && <h2 className="cap-first-letter" >{this.state.data.item.name}</h2>
        let move =  this.state.data && <p>Move: {this.state.data.move.name}</p>
        let versionGroup = this.state.data && <p>Version Group: {this.state.data.version_group.name}</p>

        let body = (
            <div>
                {title}
                {move}
                {versionGroup}
            </div>
        )

        return body;
    }
}

export default MachineDetails;