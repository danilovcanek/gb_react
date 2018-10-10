import React from 'react';
import {addPost, getPosts, deletePost, editPost} from '../actions/postActions';
import PostLists from '../components/post/PostLists';
import {connect} from 'react-redux';

import FormPost from '../components/post/AddPost';

import $ from 'jquery';

class Posts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {editForm: false, editPostId: null};
  }

    componentDidMount()
    {
        //Action
        this.props.dispatch(getPosts());

        //Добавление  или изменение
        $('body').on('submit', (event) => {
            event.preventDefault();

            //Данные
            let $userId = $('#idUser');
            let $postTitle = $('#postTitle');
            let $postBody = $('#postBody');

            let posts = addPost($postTitle.val(), $userId.val(), $postBody.val());
            this.props.dispatch(posts);

            $userId.val('');
            $postTitle.val('');
            $postBody.val('');
        });

        //Удаление
        $('body').on('click', 'a.post_del', (event) => {
            event.preventDefault();
            let idPost = $(event.currentTarget).attr('data-id');
            this.props.dispatch(deletePost(idPost));
        });

        //Показать форму редактирования
        $('body').on('click', 'a.post_edit', (event) => {
          event.preventDefault();
          let idPost = $(event.currentTarget).attr('data-id');
          this.setState({editForm: true, editPostId: idPost});
          let post = this.props.posts[idPost-1];
          console.log(post);
          $('#idUser').val(post.userId);
          $('#postTitle').val(post.title);
          $('#postBody').val(post.body);
        });



    }

    componentDidUpdate() {
        //Изменить пост
        $('#applyChanges').on('click', (event) => {
          event.preventDefault();
          // console.log("sss");

          let $userId = $('#idUser');
          let $postTitle = $('#postTitle');
          let $postBody = $('#postBody');

          let posts = editPost( this.state.editPostId, $postTitle.val(), $userId.val(), $postBody.val());
          this.props.dispatch(posts);

          this.setState({editForm: false});
          $userId.val('');
          $postTitle.val('');
          $postBody.val('');          
        });

        //Отменить редактирование поста, убрать форму
        $('#cancelChanges').on('click', (event) => {
          event.preventDefault();
          console.log("sss");

          this.setState({editForm: false});

          let $userId = $('#idUser');
          let $postTitle = $('#postTitle');
          let $postBody = $('#postBody');          

          $userId.val('');
          $postTitle.val('');
          $postBody.val('');          
        });        
    }    


    render() {
        if(this.props.is_loading){
            return <div>Данные загружаются...</div>
        }

        return (
            <div>
                <FormPost editForm={this.state.editForm}/>
                <PostLists posts={this.props.posts}/>
            </div>
        );
    }
}

function mapStateToProps(store) {
    return {
        posts: store.posts.posts,
        is_loading: store.posts.is_loading,
    }
}

export default connect(mapStateToProps)(Posts);