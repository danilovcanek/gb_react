import React from 'react';
import axios from "axios/index";
import Comment from './Comment';

export default class CommentsList extends React.Component
{
    constructor(props){
        super(props);

        this.state = {
          comments: []
        };

        axios
        .get(`https://jsonplaceholder.typicode.com/${this.props.commentsUrl}`)
        .then((response) => {
            this.setState({comments: response.data});
        }); 
    }

    render()
    {
      console.log(this.props);
      let comments = this.state.comments.map((comment, index) => {
        return <Comment key={index} {...comment} />
      });

        return (
          <div className="panel panel-default">
          <div className="panel-heading">
              <h3 className="panel-title">
                Коментарии
              </h3>
          </div>
          <div className="panel-body">
            {comments}
          </div>
      </div>
        );
    }
}