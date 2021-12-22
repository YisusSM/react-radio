import React, { useEffect } from 'react';

import { AudioNav } from './AudioNav';
import { Chat } from './Chat';

import mario from '../assets/mario.gif'
import '../components/index.css'
import { radioStartGetInfo } from '../actions/radio';
import { useDispatch, useSelector } from 'react-redux';


export const RadioScreen = () => {
    const dispatch = useDispatch();
    const { Fullscreen } = useSelector(state => state.ui);
    const elem = document.documentElement;
    useEffect(() => {

        dispatch(radioStartGetInfo());
    }, [dispatch])
    setInterval(() => {
        dispatch(radioStartGetInfo());
    }, 4000);

    if (Fullscreen) {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) { /* Safari */
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE11 */
            elem.msRequestFullscreen();
        }
    }

    return (
        <>
            <img className='jDvIgD' src={mario} alt="Mario" />

            <Chat />

            <div className='radio-footer'>

                <AudioNav />

            </div>

        </>
    )
}
