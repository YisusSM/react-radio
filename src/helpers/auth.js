import { auth, db } from "../firebase/firebaseConfig";
import { createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { collection, addDoc, where, query, getDocs } from "firebase/firestore";
import { showError } from "../actions/ui";
import { authLogOut, loginUser } from "../actions/auth";


export const registerWithEmailAndPassword = (email, password, name) => {
    return (dispatch) => {
        const now = new Date();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                auth.languageCode = 'es';
                updateProfile(auth.currentUser, {
                    displayName: name, photoURL: "https://example.com/jane-q-user/profile.jpg"
                })
                sendEmailVerification(auth.currentUser)
                    .then(() => {

                        addDoc(collection(db, "users"), {
                            admin: false,
                            id: user.uid,
                            createdAt: now,
                        });

                        auth.signOut();
                    });

            })
            .catch((error) => {
                // const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
                // ..
            });
    }

}

export const login = (email, password) => {
    return (dispatch) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log('inicio sesion', user.displayName)
                const q = query(collection(db, "users"), where("id", "==", user.uid));

                 getDocs(q).then(p => {
                    p.forEach((doc) => {
                        // doc.data() is never undefined for query doc snapshots
                        console.log(doc.id, " => ", doc.data());
                        dispatch(showError(''));
                        dispatch(loginUser(user.uid, user.displayName, user.emailVerified,doc.data().admin))
                    })
                }

                )


                // ...
            })
            .catch((error) => {
                //   const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
            });
    }
}

export const logOut = () => {
    return (dispatch) => {
        auth.signOut();
        dispatch(authLogOut())
    }


}