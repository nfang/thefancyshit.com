import React, { Component } from 'react';
import moment from 'moment';
import './Post.css';

class Post extends Component {
  render() {
    const { post } = this.props;
    const postTextEl = post.text.length ? <p>{post.text}</p> : '';
    return (
      <div className="Post">
        <header className="Post-header">
          <span className="Post-category">{post.category.toUpperCase()}</span>
          <span className="Post-title">{post.title}</span>
        </header>
        <section className="Post-content">
          {postTextEl}
          {post.images.map(item => {
            if (item.large) {
              return <img key={item.id} src={item.src} alt={item.name}
                onClick={this.props.enlargeImage.bind(this, item.large)} />;
            }
            return <img key={item.id} src={item.src} alt={item.name} />;
          }
          )}
        </section>
        <footer className="Post-footer">
          <div className="Post-inquiry">
            <span>For any inquiries regarding the products, please contact us at&nbsp;</span>
            <a href="mailto:AVIVI.WANG@GMAIL.COM">AVIVI.WANG@GMAIL.COM</a>
          </div>
          <div className="Post-meta">
            <span className="Post-date">
              {moment(post.createdAt).format('YYYY.MM.DD')} Press Info
            </span>
          </div>
        </footer>
      </div>
    );
  }
}

export default Post;
