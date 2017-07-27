import React, { Component } from 'react';
import Carousel from '../components/Carousel';
import AppStore from '../stores/AppStore';
import './Collection.css';

class Collection extends Component {

  get collection() {
    const { year, season } = this.props.match.params;
    return AppStore.fetchCollection(year, season);
  }

  render() {
    const collectionItems = this.collection.map((item, i) =>
      <img key={'col_' + i} src={item.photo} alt={item.title} />);
    return (<div>
      <Carousel items={collectionItems}></Carousel>
    </div>);
  }
}

export default Collection;
