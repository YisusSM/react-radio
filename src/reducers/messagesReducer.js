import { types } from '../types/types';

const initialState = {
    state:[]
}

export const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.messageLoad:
            return {
                state: [action.payload,...state.state]
            }

        case types.clearMessages:
            return{
                state:[]
            }
        default:
            return state;
    }
}