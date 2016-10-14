import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './App';
import About from './pages/About';
import Front from './pages/Front';
import Press from './pages/Press';
import Collection from './pages/Collection';
import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Front} />
      <Route path='about' component={About} />
      <Route path='collection(/:year(/:season))' component={Collection} />
      <Route path='press(/:year/:month)' component={Press} />
    </Route>
  </Router>,
  document.getElementById('root')
);
