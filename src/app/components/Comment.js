import React from 'react';
// import {Link} from 'react-router';
// import axios from 'axios';

export default class Post extends React.Component
{

    render()
    {
        return (
            <div className="panel panel-default">
                <div className="panel-body">
                    <p>ID коментария: {this.props.id}</p>
                    <p>Имя: {this.props.name}</p>
                    <p>Email: {this.props.email}</p>
                    <p>{this.props.body}</p>
                </div>
            </div>
        );
    }
}