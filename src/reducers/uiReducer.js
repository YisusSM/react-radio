import { types } from '../types/types';

const initialState = {
    Fullscreen: false
}

export const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.uiOpenFullscreen:
            return {
                ...state,
                Fullscreen: true
            }

        case types.uiExitFullscreen:
            return {
                ...state,
                Fullscreen: false
            }

        default:
            return state;
    }
}