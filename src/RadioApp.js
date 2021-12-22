import React from 'react';
import { Provider } from 'react-redux';
import { RadioScreen } from './components/RadioScreen';
import {store} from './store/store';

export const RadioApp = () => {
    return (
        <Provider store = {store}>
            <RadioScreen/>
        </Provider>
    )
}
