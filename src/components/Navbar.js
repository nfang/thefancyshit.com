import React, { Component } from 'react';
import { Link } from 'react-router';
import AppStore from '../stores/AppStore';
import Menu from './Menu';
import './Navbar.css';

class Navbar extends Component {
  constructor() {
    super();
    this.yearAndSeasons = AppStore.getYearSeasons();
    this.years = Object.keys(this.yearAndSeasons).sort((a, b) => a < b);
    console.log(this.yearAndSeasons);
  }

  genMenu() {
  }

  render() {
    const demoMenu = {
      label: 'COLLECTION',
      children: [
        {
          label: '2013',
          children: [
            { label: 'Spring', link: '/collection/2013/spring' },
            { label: 'Summer', link: '/collection/2013/summer' },
            { label: 'Winter', link: '/collection/2013/winter' }
          ]
        },
        {
          label: '2012',
          children: [
            { label: 'Spring', link: '/collection/2012/spring' },
            { label: 'Summer', link: '/collection/2012/summer' },
            { label: 'Winter', link: '/collection/2012/winter' }
          ]
        }
      ]
    }
    return (
      <nav className="Navbar">
        <ul className="Navbar-nav">
          <li className="Navbar-navItem">
            <Menu menu={demoMenu} />
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
