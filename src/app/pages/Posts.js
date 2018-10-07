import React from 'react';
import PostStore from '../stores/postStore';
import {addPost, getPosts} from '../actions/postActions';
import PostLists from '../components/PostLists';

export default class Posts extends React.Component {
    constructor()
    {
        super(...arguments);

        this.state = {
            posts: []
        };

        //bind
        this.newPost = this.newPost.bind(this);
        this.onPostChange = this.onPostChange.bind(this);
    }

    newPost()
    {
        let body = this.refs.body.value;
        let userId = this.refs.userId.value;
        let title = this.refs.title.value;

        //Action
        addPost(title, userId, body);

        this.refs.body.value = "";
        this.refs.userId.value = "";
        this.refs.title.value = "";
    }

    onPostChange(posts){
        this.setState({posts});
    }

    componentDidMount()
    {
        //Action
        getPosts();
    }

    componentWillMount()
    {
        PostStore.on('change', this.onPostChange);
    }

    render() {
        return (
            <div>
              <form class="form-horizontal">
                <div class="form-group">
                  <label class="control-label col-sm-2" for="userId">UserId:</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="userId" placeholder="Enter userId" name="userId" ref="userId"/>
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label col-sm-2" for="pwd">Title:</label>
                  <div class="col-sm-10">          
                    <input type="text" class="form-control" id="title" placeholder="Enter title" name="title" ref="title"/>
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label col-sm-2" for="body">Body:</label>
                  <div class="col-sm-10"> 
                    <textarea class="form-control" rows="5" id="body" placeholder="Enter body" ref="body"></textarea>
                  </div>
                </div>                
              </form>
              <div class="col-sm-offset-2 col-sm-10"> 
                <button className="btn btn-primary" onClick={this.newPost}>Добавить пост</button>
              </div>
              <PostLists posts={this.state.posts}/>
            </div>
        );
    }
}