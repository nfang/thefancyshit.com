import React, {Component} from 'react';
import {Link} from 'react-router-dom';
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
    const menu = {
      label: title,
      children: []
    };

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

    menu.children = _.orderBy(menu.children, ['label'], ['desc']);
    return menu;
  }

  render() {
    return (
      <nav className="Navbar">
        <ul className="Navbar-nav">
          <li className="Navbar-navItem">
            <Menu menu={this.createMenu('COLLECTION')}/>
          </li>
          <li className="Navbar-navItem">
            <a href="http://thefancyshit.taobao.com" target="_blank" rel="noopener noreferrer">ONLINE STORE</a>
          </li>
          <li className="Navbar-navItem">
            <Link to="/about">ABOUT</Link>
          </li>
          <li className="Navbar-navItem">
            <Link to="/press">PRESS</Link>
          </li>
          <li className="Navbar-navItem">
            <a href="http://weibo.com/fancyshit" target="_blank" rel="noopener noreferrer">BLOG</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
