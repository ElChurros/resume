import React from 'react';
import {decorate, observable, computed} from 'mobx';

class Store {
  locale = 'en';
  tabs = ['skills', 'training', 'experiences', 'projects'];
  _tab = 0;

  get tab() {
    return this.tabs[this._tab];
  }

  set tab(tabName) {
    let index = this.tabs.indexOf(tabName);
    if (index === -1)
      return;
    this._tab = index;
  }
  
  toggleLocale = () => {
    if (this.locale === 'en')
      this.locale = 'fr';
    else
      this.locale = 'en';
  }
}

decorate(Store, {
  locale: observable,
  _tab: observable,
  tab: computed,
});

export const Context = React.createContext(new Store());
export default Context;