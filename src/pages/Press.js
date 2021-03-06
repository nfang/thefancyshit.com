import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import qs from 'query-string';
import moment from 'moment';
import Post from '../components/Post';
import Viewer from '../components/Viewer';
import AppStore from '../stores/AppStore';
import './Press.css';

class Press extends Component {
  constructor() {
    super();
    this.state = {
      posts: AppStore.fetchPosts(),
      categories: AppStore.fetchCategories()
    };
  }

  get categoryLinks() {
    return (
      <ul>{this.state.categories.map((category, id) =>
        <li key={'cat_' + id}>
          <NavLink to={{
              'pathname': '/press',
              'search': `?category=${category.toLowerCase()}`
            }} className="Press-sidebarLink" activeClassName="active">
            {category.toUpperCase()}
          </NavLink>
        </li>)}
      </ul>
    );
  }

  get archiveLinks() {
    let archiveLinks = [];

    this.state.posts.forEach(item => {
      const date = moment(item.createdAt);

      let link = {
        date,
        href: `/press/${date.format('YYYY')}/${date.format('MM')}`,
        label: date.format('MMMM YYYY')
      };

      if (!archiveLinks.filter(item => item.href === link.href).length) {
        archiveLinks.push(link);
      }
    });

    archiveLinks = archiveLinks.sort((a, b) => {
      return a.date.isBefore(b.date);
    });

    return (
      <ul>{archiveLinks.map((item, id) =>
        <li key={'arc_' + id}>
          <NavLink to={item.href} className="Press-sidebarLink" activeClassName="active">
            {item.label.toUpperCase()}
          </NavLink>
        </li>)}
      </ul>
    );
  }

  get posts() {
    const { year, month } = this.props.match.params;
    const { category } = qs.parse(this.props.location.search);
    let { posts } = this.state;

    if (year && month) {
      posts = posts.filter(item =>
        moment(item.createdAt).isSame(`${year}-${month}-01`, 'month'));
    }

    if (category) {
      posts = posts.filter(item =>
        item.category.toUpperCase() === category.toUpperCase());
    }

    return posts;
  }

  loadImageViewer(image) {
    this.viewer.show(<img src={image} alt="" />);
  }

  render() {
    return (
      <div className="Press">
        <Viewer ref={(ref) => this.viewer = ref} />
        <header className="Press-header">
          <img src="/assets/banner-press.jpg" alt="banner for press page" />
          <h1 className="Press-pageTitle">PRESS</h1>
        </header>
        <aside className="Press-sidebar">
          <section className="Press-sidebarItem">
            <h2>CATEGORIES</h2>
            {this.categoryLinks}
          </section>
          <section className="Press-sidebarItem">
            <h2>ARCHIVES</h2>
            {this.archiveLinks}
          </section>
        </aside>
        <div className="Press-posts">
          {this.posts.map((item, i) =>
            <Post key={'post_' + i} post={item}
              enlargeImage={this.loadImageViewer.bind(this)} />)}
        </div>
      </div>
    );
  }
}

export default Press;
