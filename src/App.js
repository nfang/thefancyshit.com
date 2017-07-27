import React, { Component } from 'react';
import {
  Route,
  Link
} from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import Front from './pages/Front';
import Press from './pages/Press';
import Collection from './pages/Collection';

import './App.css';

class App extends Component {
  render() {
    const year = (new Date()).getFullYear();
    return (
      <div className="App">
        <header className="App-header">
          <section className="App-title">
            <Link to="/">
              <img src="/assets/logo.png" className="App-logo" alt="logo" />
            </Link>
            <p className="App-slogan">YOU NEED SOME FANCY SHIT</p>
          </section>
          <Navbar></Navbar>
        </header>
        <Route exact path="/" component={Front} />
        <Route path="/about" component={About} />
        <Route path="/collection/:year?/:season?" component={Collection} />
        <Route path="/press/:year?/:month?" component={Press} />
        <footer className="App-footer">
          <p>COPYRIGHT © 2013-{year} FANCY SHIT ALL RIGHTS RESERVED.</p>
          <p>
            <img className="icon" src="/assets/weibo-16x16.png" alt="weibo icon" />
            <a className="weibo" href="http://weibo.com/fancyshit" 
              target="_blank" rel="noopener noreferrer">
              http://weibo.com/fancyshit
            </a>
          </p>
        </footer>
      </div>
    );
  }
}

export default App;
