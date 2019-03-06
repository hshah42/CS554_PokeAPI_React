import React, { Component } from 'react';
import axios from 'axios';

class PokemonDetails extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            data: undefined,
            status: undefined
        }
    }

    async getPokemonData()
    {
        try
        {
            const response = await axios.get("https://pokeapi.co/api/v2/pokemon/" + this.props.match.params.id);
            this.setState({ data: response.data });
        }
        catch(e)
        {
            console.log(e);
        }
    }

    componentDidMount()
    {
        this.getPokemonData();
    }

    render()
    {
        let image = this.state.data && <img src={this.state.data.sprites.front_default} alt = {this.state.data.name}/>;
        let title = this.state.data && <h2 className="cap-first-letter" >{this.state.data.name}</h2>
        let weight =  this.state.data && <p>Weight: {this.state.data.weight}</p>

        let li = this.state.data && this.state.data.types.map(pokemonTypes => (
            <li className = "cap-first-letter" key = { pokemonTypes.slot }>
               { pokemonTypes.type.name }
            </li>
         ));

         let experience = this.state.data && <p>Base Exeperience: {this.state.data.base_experience}</p>

        let body = (
            <div>
                {image}
                {title}
                {weight}
                <div className="row">
                    <div className = "col-lg-6" style = {{ textAlign:"right"}}>
                        <p>Type:</p>
                    </div>
                    <div className = "col-lg-6" style = {{ textAlign:"left"}}>
                        <ul className="list-unstyled">
                            {li}
                        </ul>
                    </div>
                </div>
                {experience}
            </div>
        )

        return body;
    }
}

export default PokemonDetails;