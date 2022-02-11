import { types } from '../types/types';

const initialState = {
    chat: true,
    Fullscreen: false,
    background: 0,
    help: false,
    error: '',
    gif:false
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
                chat: action.payload
            }
        case types.uiShowError:
            return {
                ...state,
                error: action.payload
            }
        case types.uiChangeVisibilityHelp:
            return {
                ...state,
                help: action.payload
            }
        case types.uiChangeVisibilityGifMode:
            return {
                ...state,
                gif: action.payload
            }
        default:
            return state;
    }
}