import { db } from "../../firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";


export const insertMessageFirebase = (message,displayName,admin,url,isGif) => {

    return (dispatch) => {
        var now = new Date();
        try {
            console.log(displayName,message,admin)
             addDoc(collection(db, "room"), {
                author:displayName,
                message,
                createdAt: now,
                admin,
                url,
                isGif
            });
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
}