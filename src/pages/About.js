import React, { Component } from 'react';
import './About.css';

class About extends Component {
  render() {
    return (
      <div className="About">
        <header className="About-header">
          <img src="/assets/banner-about.jpg" alt="banner for about page" />
        </header>
        <article>
          <section className="About-section">
            <h1>ABOUT</h1>
            <p>
              FANCY SH!T is a young and independent fashion brand<br />
              based in Shanghai, China.
            </p>
            <p>
              Modern, Chic, Quality, and absurdly wonderful with affordable price<br />
              is what FANCY SH!T stands for.
            </p>
          </section>
          <section className="About-section">
            <h1>CONTACT</h1>
            <address>
              <p>EMAIL: AVIVI.WANG@GMAIL.COM</p>
              <p>WEIBO.COM/FANCYSHIT</p>
            </address>
          </section>
        </article>
      </div>
    );
  }
}

export default About;
