import React, {useContext} from 'react';
import {IntlProvider} from 'react-intl';
import {observer} from 'mobx-react';

import Context from '../../context';

const localeFolders = ["fr", "en"];

const localeData = localeFolders.map((locale) => {
  return require(`../../languages/${locale}`).default;
});

function langProvider(Component) {
    return observer(props => {
        const context = useContext(Context);
        
        return (
            <IntlProvider locale={context.locale} messages={localeData[localeFolders.indexOf(context.locale)]}>
                <Component {...props} />
            </IntlProvider>
        )
    })
}

export default langProvider;