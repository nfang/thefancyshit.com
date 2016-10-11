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
      posts: AppStore.fetchPosts()
    };
  }

  get categories() {
    const { posts } = this.state;
    return posts
      .map(item => item.category)
      .filter((item, index, self) => self.indexOf(item) === index);
  }

  get archives() {
    const { posts } = this.state;
    const archiveLinks = [];
    posts.forEach(item => {
      const date = moment(item.createdAt);
      let link = {
        href: `/press/${date.format('YYYY')}/${date.format('MM')}`,
        label: date.format('MMM YYYY')
      };
      if (!archiveLinks.filter(item => item.href === link.href).length) {
        archiveLinks.push(link);
      }
    });
    return archiveLinks;
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
            <ul>
              {this.categories.map((item, i) =>
                <li key={'cat_' + i}>{item.toUpperCase()}</li>)}
            </ul>
          </section>
          <section className="Press-sidebarItem">
            <h2>ARCHIVES</h2>
            <ul>
              {this.archives.map((item, i) =>
                <li key={'arc_' + i}>
                  <Link to={item.href}>{item.label.toUpperCase()}</Link>
                </li>)}
            </ul>
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
