import { types } from '../types/types';

export const uiOpenFullscreen = () => ({
    type: types.uiOpenFullscreen

})
export const uiExitFullscreen = () => ({
    type: types.uiExitFullscreen

}) 

export const changeBackground = (image)=>({
    type:types.uiChangeBackground,
    payload:image
})

export const uiChangeVisibilityChat = (mode) => ({
    type: types.uiChangeVisibilityChat,
    payload:mode

}) 