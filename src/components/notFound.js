import React, { Component } from 'react';
import ServerStatus from 'react-server-status';

class NotFound extends Component
{
    render()
    {
        let error = (<ServerStatus status={ 404 }>
                        <div>
                            <h3>404 page not found</h3>
                            <p>We are sorry but the page you are looking for does not exist.</p>
                        </div>
                    </ServerStatus>);
        return error;
    }
}

export default NotFound;