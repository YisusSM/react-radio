import React, { useEffect, useMemo } from 'react';

import { AudioNav } from './AudioNav';
import { Chat } from './chat/Chat';

import background0 from '../assets/0.gif';
import background1 from '../assets/1.gif';
import background2 from '../assets/2.gif';
import background3 from '../assets/3.gif';
import background4 from '../assets/4.gif';
import background5 from '../assets/5.gif';
import background6 from '../assets/6.gif';


import '../components/index.css'
import { radioStartGetInfo } from '../actions/radio';
import { useDispatch, useSelector } from 'react-redux';
import { Navbar } from './Navbar';
import { onAuthStateChanged } from "firebase/auth";
import { auth,db } from '../firebase/firebaseConfig';
import { collection, where, query, getDocs } from "firebase/firestore";
import { showError } from '../actions/ui';
import { loginUser } from '../actions/auth';


const RadioScreen = () => {
    const dispatch = useDispatch();
    const { background } = useSelector(state => state.ui);
    const image = useMemo(() => [background0, background1, background2, background3, background4, background5, background6], []);


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const q = query(collection(db, "users"), where("id", "==", user.uid));

                getDocs(q).then(p => {
                    p.forEach((doc) => {
                        // doc.data() is never undefined for query doc snapshots
                        dispatch(showError(''));
                        dispatch(loginUser(user.uid, user.displayName, user.emailVerified, doc.data().admin))
                    })
                }).catch((error) => {
                    console.log(error, 'error verify?')
                })
            } else {
                console.log('Inicia sesion')
            }
        })
        //eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    useEffect(() => {
        dispatch(radioStartGetInfo());
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        setInterval(() => {
            //Funcion que hace una peticion y guarda los datos en redux
            dispatch(radioStartGetInfo());
        }, 3000);
    }, [dispatch])





    const backgroundImage = () => {
        return <img className='jDvIgD' id='bg' src={image[background]} alt="img" />
    }


    return (
        <>
            {backgroundImage()}
            <Navbar />

            <Chat />

            <div className='radio-footer'>

                <AudioNav />

            </div>

        </>
    )
}

export default React.memo(RadioScreen);
