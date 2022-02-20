import React, { useEffect, useMemo } from 'react';

import { AudioNav } from './AudioNav';
import { Chat } from './chat/Chat';

import background0Mp4 from '../assets/0.mp4';
import background0Webm from '../assets/0.webm';
import background1Mp4 from '../assets/1.mp4';
import background1Webm from '../assets/1.webm';
import background2Mp4 from '../assets/2.mp4';
import background2Webm from '../assets/2.webm';
import background3Mp4 from '../assets/3.mp4';
import background3Webm from '../assets/3.webm';
import background4Mp4 from '../assets/4.mp4';
import background4Webm from '../assets/4.webm';
import background5Mp4 from '../assets/5.mp4';
import background5Webm from '../assets/5.webm';
import background6Mp4 from '../assets/6.mp4';
import background6Webm from '../assets/6.webm';


import '../components/index.css'
import { radioStartGetInfo } from '../actions/radio';
import { useDispatch, useSelector } from 'react-redux';
import { Navbar } from './Navbar';
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from '../firebase/firebaseConfig';
import { collection, where, query, getDocs } from "firebase/firestore";
import { showError } from '../actions/ui';
import { loginUser } from '../actions/auth';


const RadioScreen = () => {
    const dispatch = useDispatch();
    const { background } = useSelector(state => state.ui);
    console.log(background)
    const videoMp4 = useMemo(() => [background0Mp4, background1Mp4, background2Mp4, background3Mp4, background4Mp4, background5Mp4, background6Mp4], []);
    const videoWebm = useMemo(() => [background0Webm, background1Webm, background2Webm, background3Webm, background4Webm, background5Webm, background6Webm], []);
    const videoBackground = [
        {
            id: background,
            videomp4: videoMp4[background],
            videowebm: videoWebm[background]

        }
    ]

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
    }, [])

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
        return (
            videoBackground.map(item => {
                console.log(item)
                return <div key={item.id}>
                    <video autoPlay muted loop >
                        <source src={item.videowebm} type="video/webm" />
                        <source src={item.videomp4} type="video/mp4" />
                    </video>
                </div>
            })

        )

    }
    return (
        <div className='container'>
            {backgroundImage()}
            <Navbar />

            <Chat />

            <div className='radio-footer'>

                <AudioNav />

            </div>

        </div>
    )
}

export default React.memo(RadioScreen);
