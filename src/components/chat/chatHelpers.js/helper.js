import { login, logOut, registerWithEmailAndPassword } from '../../../helpers/auth';
import { insertMessageFirebase } from '../firebase';
import { showError, uiChangeVisibilityGifMode } from '../../../actions/ui';
import { getGif } from '../GifsChat/Gif';



export const commands = (message, uid, verified, displayname, dispatch, admin) => {

    const words = message.split(' ');

    switch (words[0]) {
        case '/login':
            dispatch(login(words[1], words[2]));
            break;
        case '/register':
            dispatch(registerWithEmailAndPassword(words[2], words[3], words[1]));
            break;
        case '/logout':
            dispatch(logOut())
            break;
        case '/giphy':
            if (uid) {
                if (verified) {
                    if (verifyInput(message)) {
                        console.log(words, 'desde /giphy');
                        getGif(words[1]);
                        dispatch(uiChangeVisibilityGifMode(true));
                        //dispatch(insertMessageFirebase(message, displayname, admin))
                    } else console.log('mensaje vacio');

                } else console.log('verifica correo');
            } else dispatch(showError('inicia sesión'))
            break;
        default:
            if (uid) {
                if (verified) {
                    if (verifyInput(message)) {
                        getGif();
                        dispatch(insertMessageFirebase(message, displayname, admin, null, false))
                    } else console.log('mensaje vacio');

                } else console.log('verifica correo');
            } else dispatch(showError('inicia sesión'))
            break;
    }


}

const verifyInput = (message) => {
    const text = message.replace(/\s+/g, '');
    if (text.length > 0) {
        return true
    } else {
        return false;
    }

}