import {
  ADD_COMMENT,
  GET_COMMENTS
} from '../constants/commentConstants';
import dispatcher from '../dispatcher';
import {EventEmitter} from 'events';

class commentStore extends EventEmitter{
   constructor()
   {
       super(...arguments);

       //Для комментариев
       this.comments = [];

       //bind
       this.getCommentsEnd = this.getCommentsEnd.bind(this);
       this.change = this.change.bind(this);
       this.addComment = this.addComment.bind(this);
       this.handleActions = this.handleActions.bind(this);
   }

   getCommentsEnd(comments)
   {
       this.comments = comments;
       this.change(); //Для уведомления подписанных компонентов
   }

   change()
   {
       this.emit('change', this.comments);
   }

   addComment(comment)
   {
       this.comments.push(comment);
       this.change();
   }

   handleActions(action){
       switch (action.type)
       {
           case ADD_COMMENT: {
               this.addComment(action.payload);
               break;
           }
           case GET_COMMENTS: {
               this.getCommentsEnd(action.payload);
               break;
           }
       }
   }
}

const store = new commentStore;
dispatcher.register(store.handleActions);
export default store;