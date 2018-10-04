import React from 'react';
import axios from 'axios';
import Post from './Post';

export default class PostsList extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            posts: []
        };

        axios
            .get('https://jsonplaceholder.typicode.com/posts/')
            .then((response) => {
                this.setState({posts: response.data});
            });
    }

    render()
    {
      // console.log(this.props.children);
        if(!this.state.posts.length){
            return null; //Если данные еще загружаются
        }

        let postMaxNumber = 30;      

        let posts = this.state.posts.map((post, index) => {
          if(index < postMaxNumber){
            return <Post key={index} {...post} showComments={0}/>
          } else {
            return null;
          }
        });

        return (
            <div>
                <h1>Посты</h1>
                {posts}
            </div>
        );
    }
}