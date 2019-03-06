import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';

const idColumn = 6;

class MachineList extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            data: undefined,
            pageNumber: undefined,
            numberOfPages: undefined,
            is404: false
        }
    }

    async getMachines(pageNumber)
    {
        let offset;
        let numberOfPages;

        if(pageNumber)
        {
            offset = 20 * (pageNumber - 1);
        }
        else
        {
            offset = 0;
        }

        try
        {
            const response = await axios.get("https://pokeapi.co/api/v2/machine?offset=" + offset + "&limit=20");
            
            let maxNumber = Math.ceil(response.data.count / 20);

            console.log(response)

            if(pageNumber === maxNumber)
            {
                numberOfPages = 0;
            }
            else if(pageNumber <= (maxNumber - 3))
            {
                numberOfPages = 3;
            }
            else if(pageNumber >= (maxNumber - 3) && pageNumber < maxNumber)
            {
                numberOfPages = maxNumber - pageNumber;
            }
            else
            {
                numberOfPages = -1;
                this.setState({ is404: true });
                return;
            }

            this.setState({ data: response.data, numberOfPages: numberOfPages, pageNumber: pageNumber });
        }
        catch(e)
        {
            console.log(e);
        }
    }
    
    componentDidMount()
    {
        this.getMachines(Number(this.props.match.params.pageNumber));
    }

    componentWillReceiveProps(props)
    {
        this.getMachines(Number(props.match.params.pageNumber));
    }

    render()
    {
        let body = null;
        let li = null;
        let previous = null;
        let next = null;

        if(this.state.is404)
        {
            body = (
                <div>
                    <Redirect to="/notfound" status={404}/>
                </div>
            )
        }
        else
        {
            li = this.state.data && this.state.data.results.map(machine => (
                <li key={machine.url.split("/")[idColumn]} className = "cap-first-letter">
                   <Link to={`/machine/${machine.url.split("/")[idColumn]}`}>{machine.url.split("/")[idColumn]}</Link>
                </li>
             ));
     
            if(this.state.numberOfPages >= 0 && this.state.pageNumber > 0)
            {
                if(this.state.pageNumber > 1)
                {
                    let ref = Number(this.state.pageNumber) - 1;
                    previous =  <li><Link to={`/machine/page/${ref}`}>Previous</Link></li>
                }
     
                if(this.state.numberOfPages > 0)
                {
                    let ref = Number(this.state.pageNumber) + 1;
                    next = <li><Link to={`/machine/page/${ref}`}>Next</Link></li>
                }
            }
     
            body = (
                <div>
                    <ul className="list-unstyled">
                        {li}
                    </ul>
     
                    <nav aria-label="Page navigation example">
                        <ul className="pagination justify-content-center">
                            {previous}
                            <li>|</li>
                            {next}
                        </ul>
                    </nav>
                </div>
                 
            )
        }

        return body;
    }
}

export default MachineList;