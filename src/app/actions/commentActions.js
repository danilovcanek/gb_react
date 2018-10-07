import dispatcher from '../dispatcher';
import {ADD_COMMENT, GET_COMMENTS} from "../constants/commentConstants";
import axios from 'axios';

export function addComment(postId, id, name, email, body) {
    dispatcher.dispatch({
        type: ADD_COMMENT,
        payload: {postId, id, name, email, body}
    });
}

export function getComments() {
    axios
        .get('https://jsonplaceholder.typicode.com/comments/')
        .then((response) => {
            dispatcher.dispatch({
                type: GET_COMMENTS,
                payload: response.data
            });
        });
}