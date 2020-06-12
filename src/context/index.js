import React from 'react';
import {decorate, observable, computed} from 'mobx';

class Store {
  constructor() {
    this.localeFolders = ["fr", "en"];
    this.localeData = this.localeFolders.map((locale) => {
      return require(`../languages/${locale}`).default;
    });
    this._locale = navigator.languages[0] === 'en' ? 1 : 0;
    this.tabs = ['skills', 'experiences', 'projects', 'training'];
  }


  get locale() {
    return this.localeFolders[this._locale];
  }

  set locale(l) {
    this._locale = this.localeFolders.indexOf(l);
  }
}

decorate(Store, {
  _locale: observable,
  locale: computed,
});

export const Context = React.createContext(new Store());
export default Context;