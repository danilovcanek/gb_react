import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import Layout from './app/layouts/Layout';
import MainPage from './app/pages/Main';
import PageNotFound from './app/pages/PageNotFound';
import Users from './app/pages/Users';
import User from './app/pages/User';
import Posts from './app/pages/Posts';
import Post from './app/pages/Post';

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={MainPage}/>
      <Route path="users" component={Users}>
        <Route path=":userId" component={User}/>
      </Route>
      <Route path="posts" component={Posts}>
        <Route path=":postId(/:extraParams)" component={Post}>
          {/* <Route path="comments" component={Comments}/> */}
        </Route>
      </Route>
      <Route path="*" component={PageNotFound}/>
    </Route>
  </Router>,
app);