import React, { Component } from 'react';
import axios from 'axios';

class BerriesDetails extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            data: undefined,
            status: undefined
        }
    }

    async getBerryData()
    {
        try
        {
            const response = await axios.get("https://pokeapi.co/api/v2/berry/" + this.props.match.params.id);
            this.setState({ data: response.data });
        }
        catch(e)
        {
            console.log(e);
        }
    }

    componentDidMount()
    {
        this.getBerryData();
    }

    render()
    {
        let title = this.state.data && <h2 className="cap-first-letter" >{this.state.data.name}</h2>
        let item =  this.state.data && <p>Item: {this.state.data.item.name}</p>

        let li = this.state.data && this.state.data.flavors.map(berryFlavour => (
            <li className = "cap-first-letter" key = { berryFlavour.flavor.name }>
               { berryFlavour.flavor.name }
            </li>
         ));

        let smoothness = this.state.data && <p>Smoothness: {this.state.data.smoothness}</p>
        let maxHarvest = this.state.data && <p>Max Harvest: {this.state.data.max_harvest}</p>

        let body = (
            <div>
                {title}
                {item}
                <div className="row">
                    <div className = "col-lg-6" style = {{ textAlign:"right"}}>
                        <p>Flavors:</p>
                    </div>
                    <div className = "col-lg-6" style = {{ textAlign:"left"}}>
                        <ul className="list-unstyled">
                            {li}
                        </ul>
                    </div>
                </div>
                {smoothness}
                {maxHarvest}
            </div>
        )

        return body;
    }
}

export default BerriesDetails;