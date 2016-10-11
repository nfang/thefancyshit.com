import React, { Component } from 'react';
import { Link } from 'react-router';
import './Navbar.css';

// class MenuItem extends Component {
//   render() {
//     return (
//       <li></li>
//     )
//   }
// }

// class Menu extends Component {
//   constructor() {
//     super();
//     this.items = [];
//   }
//
//   render() {
//     const itemComponents = this.items.map(
//       (item) => <MenuItem title={item.title} children={item.children} />
//     );
//     return (
//       <ul className="Menu">{itemComponents}</ul>
//     );
//   }
// }

class Navbar extends Component {
  render() {
    return (
      <nav className="Navbar">
        <ul className="Navbar-nav">
          <li>COLLECTION</li>
          <li>
            <a href="http://thefancyshit.taobao.com" target="_blank">ONLINE STORE</a>
          </li>
          <li><Link to="/about">ABOUT</Link></li>
          <li><Link to="/press">PRESS</Link></li>
          <li>
            <a href="http://weibo.com/fancyshit" target="_blank">BLOG</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
