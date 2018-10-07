import {
   ADD_POST,
   GET_POSTS
} from '../constants/postConstants';
import dispatcher from '../dispatcher';
import {EventEmitter} from 'events';

class postStore extends EventEmitter{
    constructor()
    {
        super(...arguments);

        //Для постов
        this.posts = [];

        //bind
        this.getPostsEnd = this.getPostsEnd.bind(this);
        this.change = this.change.bind(this);
        this.addPost = this.addPost.bind(this);
        this.handleActions = this.handleActions.bind(this);
    }

    getPostsEnd(posts)
    {
        this.posts = posts;
        this.change(); //Для уведомления подписанных компонентов
    }

    change()
    {
        this.emit('change', this.posts);
    }

    addPost(post)
    {
        this.posts.push(post);
        this.change();
    }

    handleActions(action){
        switch (action.type)
        {
            case ADD_POST: {
                this.addPost(action.payload);
                break;
            }
            case GET_POSTS: {
                this.getPostsEnd(action.payload);
                break;
            }
        }
    }
}

const store = new postStore;
dispatcher.register(store.handleActions);
export default store;