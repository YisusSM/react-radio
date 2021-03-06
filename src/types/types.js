//objeto para centralizar todos los tipos de acciones

export const types = {
    uiOpenModal: '[ui] Open Modal',
    uiCloseModal: '[ui] Close Modal',
    uiOpenFullscreen: '[ui] Open Fullscreen',
    uiExitFullscreen: '[ui] Exit Fullscreen',
    uiChangeBackground: '[ui] Change Background',
    uiChangeVisibilityChat:'[ui] Change Visibility Chat',
    uiChangeVisibilityHelp:'[ui] Change Visibility Help',
    uiChangeVisibilityGifMode:'[ui] Change Visibility Gif',
    uiShowError:'[ui] Show Error',

    radioGetInfo: '[radio] get information',
    messageLoad:'[messages] Messages Load',
    clearMessages:'[messages] Clear All Messages',

    eventAddNew: '[event] Add New',
    eventLogout: '[event] Clean Events',
    eventStartAddNew: '[event] Start Add New ',
    eventSetActive: '[event] Set Active',
    eventClearActiveEvent: '[event] Clear Active Event',
    eventUpdate: '[event] Event Updated',
    eventDelete: '[event] Event Deleted',
    eventLoaded: '[event] Event Loaded',


    authChecking: '[auth] Checking Login State',
    authCheckingFinish: '[auth] Finish Checking Login State',
    authStartLogin: '[auth] Start Login',
    authLogin: '[auth] Loign',
    authStartRegister: '[auth] Start Register',
    authStartJWTRenew: '[auth] Start Token Renew',
    authLogout: '[auth] Logout',

}