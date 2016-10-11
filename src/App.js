import React, { Component } from 'react';
import { Link } from 'react-router';
import './App.css';
import Navbar from './components/Navbar';

class App extends Component {
  render() {
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
        {this.props.children}
        <footer className="App-footer">
          <p>COPYRIGHT © 2013-2016 FANCY SHIT ALL RIGHTS RESERVED.</p>
          <p>
            <img className="icon" src="/assets/weibo-16x16.png" alt="weibo icon" />
            <a className="weibo" href="http://weibo.com/fancyshit" target="_blank">
              http://weibo.com/fancyshit
            </a>
          </p>
        </footer>
      </div>
    );
  }
}

export default App;
