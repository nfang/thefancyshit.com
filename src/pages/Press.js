import React, { Component } from 'react';
import { Link } from 'react-router';
import moment from 'moment';
import Post from '../components/Post';
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
          <Link to={{
            'pathname': '/press',
            'query': { 'category': category.toLowerCase() }
          }}>{category.toUpperCase()}</Link>
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
          <Link to={item.href}>{item.label.toUpperCase()}</Link>
        </li>)}
      </ul>
    );
  }

  get posts() {
    const { year, month } = this.props.params;
    const { category } = this.props.location.query;
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

  render() {
    return (
      <div className="Press">
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
          {this.posts.map((item, i) => <Post key={'post_' + i} post={item} />)}
        </div>
      </div>
    );
  }
}

export default Press;
