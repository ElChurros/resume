import React, {useContext} from 'react';
import {IntlProvider} from 'react-intl';
import {observer} from 'mobx-react';

import Context from '../../context';

function langProvider(Component) {
    return observer(props => {
        const context = useContext(Context);
        
        return (
            <IntlProvider locale={context.locale} messages={context.localeData[context._locale]}>
                <Component {...props} />
            </IntlProvider>
        )
    })
}

export default langProvider;