import React from 'react';
import {Link} from 'react-router';
import axios from 'axios';
import CommentsList from './CommenstList';

export default class Post extends React.Component
{
  constructor(props)
  {
      super(props);

      this.state = {
          userName: null
          // comments: []
      };

      axios
          .get(`https://jsonplaceholder.typicode.com/users/${this.props.userId}`)
          .then((response) => {
              this.setState({userName: response.data.name});
          });

      // axios
      //     .get(`https://jsonplaceholder.typicode.com/posts/${this.props.id}/comments`)
      //     .then((response) => {
      //         this.setState({comments: response.data});
      //     });      
  }

    render()
    {
      // console.log("Post render");
      // console.log(this.props);
      // let comments = this.state.comments.map((comment, index) => {
      //   return <Comment key={index} {...comment} />
      // });

      let commetsBlock = 
        <Link to={`/posts/${this.props.id}/comments`}>
          Коментарии
        </Link>;
      if(this.props.showComments){
        commetsBlock = 
        <CommentsList commentsUrl={"posts/"+this.props.id+"/comments"} />;        
      }

        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        <Link to={`/posts/${this.props.id}`}>
                          {this.props.title}
                        </Link>
                        </h3>
                </div>
                <div className="panel-body">
                    <Link to={`/users/${this.props.userId}`}>
                        {this.state.userName}
                    </Link>                    
                    <p>Номер поста: {this.props.id}</p>
                    <p>{this.props.body}</p>
                      {commetsBlock}
                      
                </div>
            </div>
        );
    }
}

Post.defaultProps = {
  showComments: 1
};