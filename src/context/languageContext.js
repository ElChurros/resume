import { createContext } from 'react';
import {observable, computed, makeObservable} from 'mobx';

class Store {
  _locale = navigator.languages[0] === 'en' ? 1 : 0;

  constructor() {
    makeObservable(this, {
      _locale: observable,
      locale: computed
    })
    this.localeFolders = ["fr", "en"];
    this.localeData = this.localeFolders.map((locale) => {
      return require(`../languages/${locale}`).default;
    });
    this.tabs = ['skills', 'experiences', 'projects', 'training'];
  }


  get locale() {
    return this.localeFolders[this._locale];
  }

  set locale(l) {
    this._locale = this.localeFolders.indexOf(l);
  }
}

export const Context = createContext(new Store());
export default Context;