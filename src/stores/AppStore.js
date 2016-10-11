import { EventEmitter } from 'events';
import { IN_MEMORY_DB } from './database';
import moment from 'moment';

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
    return IN_MEMORY_DB.posts
      .map(item => item.category)
      .filter((item, index, self) => self.indexOf(item) === index)
      .sort();
  }
}

const appStore = new AppStore();

export default appStore;
