import React from 'react';
import {Link} from 'react-router';

export default class CommentItem extends React.Component
{
    render()
    {
        return (
            <div className="panel panel-default">
                {/* <div className="panel-heading">
                    <h3 className="panel-title">
                        <Link to={`/users/${this.props.userId}`}>
                            {this.props.title}
                        </Link>
                    </h3>
                </div> */}
                <div className="panel-body">
                    <div>PostId: {this.props.postId}</div>
                    <div>CommentId: {this.props.id}</div>
                    <div>Name: {this.props.name}</div>
                    <div>Email: {this.props.email}</div>
                    <div>Body: {this.props.body}</div>
                </div>
            </div>
        );
    }
}