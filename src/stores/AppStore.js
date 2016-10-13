import { EventEmitter } from 'events';
import { IN_MEMORY_DB } from './database';
import moment from 'moment';
import _ from 'underscore';

class AppStore extends EventEmitter {

  getKeyVisuals() {
    return IN_MEMORY_DB.visuals;
  }

  fetchPosts() {
    return IN_MEMORY_DB.posts
      .sort((a, b) => {
        return moment(a.createdAt).isBefore(b.createdAt);
      });
  }

  fetchCategories() {
    const categories = _.pluck(IN_MEMORY_DB.posts, 'category').sort();
    return _.uniq(categories);
  }

  fetchCollection() {
    return IN_MEMORY_DB.collection.sort((a, b) => a.year < b.year);
  }

  getYearSeasons() {
    let yearSeasons = IN_MEMORY_DB.collection.map(item => {
      return { year: item.year, season: item.season };
    });
    yearSeasons = _.uniq(yearSeasons, true, a => a.year + a.season);
    return _.groupBy(yearSeasons, 'year');
  }
}

const appStore = new AppStore();

export default appStore;
