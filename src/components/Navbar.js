import React, { Component } from 'react';
import { Link } from 'react-router';
import _ from 'lodash';
import AppStore from '../stores/AppStore';
import Menu from './Menu';
import './Navbar.css';

class Navbar extends Component {
  constructor() {
    super();
    this.yearAndSeasons = AppStore.getYearSeasons();
  }

  createMenu(title) {
    const menu = { label: title, children: [] };

    Object.keys(this.yearAndSeasons).forEach((year) => {
      menu.children.push({
        label: year,
        children: this.yearAndSeasons[year].map(item => {
          return {
            label: _.capitalize(item.season),
            link: `/collection/${item.year}/${item.season}`.toLowerCase()
          };
        })
      });
    });
    return menu;
  }

  render() {
    const menu = this.createMenu('COLLECTION');
    return (
      <nav className="Navbar">
        <ul className="Navbar-nav">
          <li className="Navbar-navItem">
            <Menu menu={menu} />
          </li>
          <li className="Navbar-navItem">
            <a href="http://thefancyshit.taobao.com" target="_blank">ONLINE STORE</a>
          </li>
          <li className="Navbar-navItem"><Link to="/about">ABOUT</Link></li>
          <li className="Navbar-navItem"><Link to="/press">PRESS</Link></li>
          <li className="Navbar-navItem">
            <a href="http://weibo.com/fancyshit" target="_blank">BLOG</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
