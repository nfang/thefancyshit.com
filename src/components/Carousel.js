import React, { Component } from 'react';
import './Carousel.css';

class Carousel extends Component {
  constructor() {
    super();
    this.state = { currentIndex: 0 };
  }

  componentWillReceiveProps() {
    this.setState({ currentIndex: 0 });
  }

  next() {
    let nextIndex = this.state.currentIndex + 1;
    if (nextIndex === this.props.items.length) {
      nextIndex = this.props.items.length - 1;
    }
    this.setState({ currentIndex: nextIndex });
  }

  prev() {
    let nextIndex = this.state.currentIndex === 0 ? 0 : this.state.currentIndex - 1;
    this.setState({ currentIndex: nextIndex });
  }

  render() {
    const percentage = (-100 / this.props.items.length);
    const slideTransform = {
      transform: `translateX(${percentage * this.state.currentIndex}%)`
    };
    return (
      <div className="Carousel">
        <button className="Carousel-nav Carousel-nav--left"
          onClick={this.prev.bind(this)}>&lt;</button>
        <div className="Carousel-container">
          <div className="Carousel-cover"></div>
          <div className="Carousel-inner">
            <ul className="Carousel-slides" style={slideTransform}>
              {this.props.items.map((item, i) => <li key={'car_' + i}>{item}</li>)}
            </ul>
          </div>
          <div className="Carousel-cover"></div>
        </div>
        <button className="Carousel-nav Carousel-nav--right"
          onClick={this.next.bind(this)}>&gt;</button>
      </div>
    );
  }
}

export default Carousel;
