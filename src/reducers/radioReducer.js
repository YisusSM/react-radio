import { types } from '../types/types';

const initialState = {
    name: 'test',
    author: 'test2',
    historySong: [],
    listeners: 496
}

export const radioReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.radioGetInfo:
            return {
                ...state,
                name: action.payload.current_track.name,
                author: action.payload.current_track.author,
                listeners: action.payload.listeners
            }

        default:
            return state;
    }
}