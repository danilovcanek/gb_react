import React from 'react';
import CommentStore from '../stores/commentStore';
import {addComment, getComments} from '../actions/commentActions';
import CommentLists from '../components/CommentList';

export default class Comments extends React.Component {
    constructor()
    {
        super(...arguments);

        this.state = {
            comments: []
        };

        //bind
        this.newComment = this.newComment.bind(this);
        this.onCommentChange = this.onCommentChange.bind(this);
    }

    newComment()
    {
        let postId = this.refs.postId.value;
        let id = this.state.comments.length + 1;
        let name = this.refs.name.value;
        let email = this.refs.email.value;
        let body = this.refs.body.value;

        //Action
        addComment(postId, id, name, email, body);

        this.refs.postId.value = "";
        // this.refs.id.value = "";
        this.refs.name.value = "";
        this.refs.email.value = "";
        this.refs.body.value = "";
    }

    onCommentChange(comments){
        this.setState({comments});
    }

    componentDidMount()
    {
        //Action
        getComments();
    }

    componentWillMount()
    {
        CommentStore.on('change', this.onCommentChange);
    }

    render() {
        return (
            <div>
              <form class="form-horizontal">
                <div class="form-group">
                  <label class="control-label col-sm-2" for="postId">postId:</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="postId" placeholder="Enter postId" name="postId" ref="postId"/>
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label col-sm-2" for="name">name:</label>
                  <div class="col-sm-10">          
                    <input type="text" class="form-control" id="name" placeholder="Enter name" name="name" ref="name"/>
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label col-sm-2" for="email">email:</label>
                  <div class="col-sm-10">          
                    <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" ref="email"/>
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
                <button className="btn btn-primary" onClick={this.newComment}>Добавить комметнарий</button>
              </div>
              <CommentLists comments={this.state.comments}/>
            </div>
        );
    }
}