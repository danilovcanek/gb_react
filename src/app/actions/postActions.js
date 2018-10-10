import {ADD_POST, GET_POSTS, DELETE_POST, EDIT_POST} from "../constants/postConstants";
import axios from 'axios';

export function addPost(title, userId, body) {
    return {
        type: ADD_POST,
        payload: {title, userId, body}
    };
}

export function getPosts() {
    return {
        type: GET_POSTS,
        payload: axios.get('https://jsonplaceholder.typicode.com/posts/')
    };
}

export function deletePost(idPost) {
    return {
        type: DELETE_POST,
        payload: idPost
    }
}

export function editPost(idPost, title, userId, body) {
  return {
      type: EDIT_POST,
      payload: {idPost, title, userId, body}
  }
}