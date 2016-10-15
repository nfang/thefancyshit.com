import React, { Component } from 'react';
import classNames from 'classnames';
import './Viewer.css';

class Viewer extends Component {
  constructor() {
    super();
    this.state = { isShown: false };
  }

  show(image) {
    this.setState({
      isShown: true,
      content: image
    });
  }

  hide() {
    this.setState({ isShown: false });
  }

  render() {
    const viewerClassNames = classNames('Viewer', {
      'reveal': this.state.isShown
    });
    return (
      <div className={viewerClassNames}>
        <a className="Viewer-close" onClick={this.hide.bind(this)}>&times;</a>
        <div className="Viewer-content">{this.state.content}</div>
      </div>
    );
  }
}

export default Viewer;
