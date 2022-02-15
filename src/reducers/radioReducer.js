import { types } from '../types/types';

const initialState = {
    name: 'feliz',
    author: 'cumple',
    historySong: [],
    listeners: 0
}

export const radioReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.radioGetInfo:
            return {
                ...state,
                name: action.payload.current_track.name,
                author: action.payload.current_track.author,
                listeners: action.payload.listeners,
                historySong:action.payload.history
            }

        default:
            return state;
    }
}