import { types } from '../types/types';

const initialState = {
    uid:'',
    displayName:'',
    verified:false,
    admin:false
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.authLogin:
            return {
                uid:action.payload.uid,
                displayName:action.payload.displayName,
                verified:action.payload.verified,
                admin:action.payload.admin
            }
        case types.authLogout:
            return {
                uid:'',
                displayName:'',
                verified:false,
                admin:false
            }
        default:
            return state;
    }
}