import React from 'react';
import axios from "axios/index";
import PostProfile from '../components/Post';
import CommenstList from '../components/CommenstList';

export default class Post extends React.Component
{
    constructor(props){
        super(props);

        this.state = {
            post: null
        };

        axios
            .get(`https://jsonplaceholder.typicode.com/posts/${this.props.params.postId}`)
            .then((response) => {
                this.setState({post: response.data});
            });
    }

    render()
    {
        console.log(this.props);
        // console.log(this.props.params.extraParams === "undefined");
        if(!!!this.props.params.extraParams){
          return (
              <div>
                  {this.state.post && <PostProfile {...this.state.post} />}
              </div>
          );
        } else {
          return (
            <div>
              <CommenstList commentsUrl={"posts/"+this.props.params.postId+"/comments"}/>
            </div>
          );
        }
    }
}