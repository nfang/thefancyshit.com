import { EventEmitter } from 'events';
import { IN_MEMORY_DB } from './database';

class AppStore extends EventEmitter {

  getKeyVisuals() {
    return IN_MEMORY_DB.visuals;
  }

  fetchPosts() {
    return IN_MEMORY_DB.press;
  }
}

const appStore = new AppStore();

export default appStore;
