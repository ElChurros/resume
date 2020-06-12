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
    this._tab = 0;
  }


  get locale() {
    return this.localeFolders[this._locale];
  }

  set locale(l) {
    this._locale = this.localeFolders.indexOf(l);
  }

  get tab() {
    return this.tabs[this._tab];
  }

  set tab(tabName) {
    let index = this.tabs.indexOf(tabName);
    if (index === -1)
      return;
    this._tab = index;
  }
}

decorate(Store, {
  _locale: observable,
  _tab: observable,
  tab: computed,
  locale: computed,
});

export const Context = React.createContext(new Store());
export default Context;