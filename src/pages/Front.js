import React, { Component } from 'react';
import AppStore from '../stores/AppStore';
import './Front.css';

const SWAY_INTERVAL = 8000;

class Front extends Component {
  constructor() {
    super();
    this.visuals = AppStore.fetchKeyVisuals();
    this.state = {
      currentIndex: 0,
      direction: 'normal'
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      if (this.state.direction === 'reverse') {
        if (this.state.currentIndex === 0) {
          this.setState({
            currentIndex: 1,
            direction: 'normal'
          });
        } else {
          this.setState({ currentIndex: this.state.currentIndex - 1});
        }
      } else {
        if (this.state.currentIndex === this.visuals.length - 1) {
          this.setState({
            currentIndex: this.state.currentIndex - 1,
            direction: 'reverse'
          });
        } else {
          this.setState({ currentIndex: this.state.currentIndex + 1});
        }
      }
    }, SWAY_INTERVAL);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const visualComponents = this.visuals.map(
      (item, i) =>
        <li key={item.id} className="Front-visual">
          <img src={item.src} alt={item.title} />
        </li>
    );

    const containerStyles = {
      'transform': `translate(${this.state.currentIndex * -100}%)`
    };

    return (
      <div className="Front">
        <ul className="Front-visualContainer" style={containerStyles}>{visualComponents}</ul>
      </div>
    );
  }
}

export default Front;
