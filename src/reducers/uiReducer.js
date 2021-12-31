import { types } from '../types/types';

const initialState = {
    chat: true,
    Fullscreen: false,
    background: 0
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

        case types.uiChangeBackground:
            return {
                ...state,
                background: action.payload
            }
        case types.uiChangeVisibilityChat:
            return {
                ...state,
                chat:action.payload
            }
        default:
            return state;
    }
}