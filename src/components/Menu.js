import React, {Component} from 'react';
import {Link} from 'react-router';
import classNames from 'classnames';
import './Menu.css';

let itemKey = 0;

class MenuItem extends Component {
  constructor() {
    super();
    this.state = {
      submenuOpened: false
    }
  }

  openSubmenu() {
    this.setState({submenuOpened: true});
  }

  closeSubmenu() {
    this.setState({submenuOpened: false});
  }

  render() {
    const {children} = this.props;
    const submenuClassNames = classNames('Menu-items', 'MenuItem-submenu', {'expanded': this.state.submenuOpened});
    let subMenu = children.length
      ? <ul className={submenuClassNames}>
          {children.map(item => {
            return <MenuItem key={'mi-' + (itemKey++)} label={item.label} link={item.link} children={item.children || []}/>
          })}
        </ul>
      : '';
    return (
      <li className="MenuItem" onMouseEnter={this.openSubmenu.bind(this)} onMouseLeave={this.closeSubmenu.bind(this)}>
        <Link className="MenuItem-label" to={this.props.link}>
          {this.props.label}
        </Link>
        {subMenu}
      </li>
    );
  }
}

/**
 * Menu data format:
 * {
 *   label: 'COLLECTION',
 *   children: [
 *     {
 *       label: '2013',
 *       children: [
 *         { label: 'Spring', link: '/collection/2013/spring' }, ...
 *       ]
 *     }, ...
 *   ]
 * }
 */
class Menu extends Component {
  constructor() {
    super();
    this.state = {
      'expanded': false
    };
    this.handleDocumentClick = (e) => {
      if (!this.menuEl.contains(e.target)) {
        this.close();
      }
    }
  }

  componentDidMount() {
    document.addEventListener('click', this.handleDocumentClick);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleDocumentClick);
  }

  close() {
    this.setState({'expanded': false})
  }

  toggle() {
    this.setState({
      'expanded': !this.state.expanded
    });
  }

  render() {
    const {menu} = this.props;
    const menuItems = menu.children.map(item => {
      return <MenuItem key={'mi-' + (itemKey++)} label={item.label} link={item.link} children={item.children}/>
    });
    const menuClassNames = classNames('Menu-items', {'expanded': this.state.expanded});
    return (
      <div className="Menu" ref={(ref) => this.menuEl = ref}>
        <a onClick={this.toggle.bind(this)}>{menu.label}</a>
        <ul className={menuClassNames}>{menuItems}</ul>
      </div>
    );
  }
}

export default Menu;
