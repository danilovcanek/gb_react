import React from 'react';
import {Link} from 'react-router';
import axios from 'axios';
// import Comment from './Comment';
import CommentsList from './CommenstList';

export default class User extends React.Component
{
    render()
    {
      // console.log(this.state.comments);

      // let comments = this.state.comments.map((comment, index) => {
      //   return <Comment key={index} {...comment} />
      // });

      let commentsBlock;
      if(this.props.showComments){
        commentsBlock = 
        <CommentsList commentsUrl={"posts?userId="+this.props.id}/>;  ;
      }

        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        <Link to={`/users/${this.props.id}`}>
                        {this.props.username}
                        </Link>
                        </h3>
                </div>
                <div className="panel-body">
                    <p>{this.props.name}</p>
                    <p>{this.props.email}</p>
                    <p>{this.props.phone}</p>
                    <p>{this.props.website}</p>
                </div>
                {commentsBlock}
            </div>
        );
    }
}

User.defaultProps = {
  showComments: 1
};