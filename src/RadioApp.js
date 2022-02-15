import React from 'react';
import { Provider } from 'react-redux';
import { FullScreen } from './FullScreen';
import { store } from './store/store';

export const RadioApp = () => {

    return (
        <Provider store={store}>
            <FullScreen />
        </Provider>
    )
}
