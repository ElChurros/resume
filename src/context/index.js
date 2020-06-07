import React from 'react';
import {decorate, observable} from 'mobx';

class Store {
  locale = 'en';
  
  toggleLocale = () => {
    if (this.locale === 'en')
      this.locale = 'fr';
    else
      this.locale = 'en';
  }
}

decorate(Store, {
  locale: observable,
});

export const Context = React.createContext(new Store());
export default Context;