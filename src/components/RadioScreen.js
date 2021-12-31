import React, { useEffect } from 'react';

import { AudioNav } from './AudioNav';
import { Chat } from './chat/Chat';

import background0 from '../assets/0.gif'
import background1 from '../assets/1.gif'
import background2 from '../assets/2.gif'
import background3 from '../assets/3.gif'
import background4 from '../assets/4.gif'
import background5 from '../assets/5.gif'
import background6 from '../assets/6.gif'

import '../components/index.css'
import { radioStartGetInfo } from '../actions/radio';
import { useDispatch, useSelector } from 'react-redux';
import { Navbar } from './Navbar';


export const RadioScreen = () => {
    const dispatch = useDispatch();
    const { Fullscreen, background } = useSelector(state => state.ui);
    const image = [background0, background1, background2, background3, background4, background5, background6];
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
    if (document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement) {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) { /* Safari */
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { /* IE11 */
            document.msExitFullscreen();
        }
    }

    return (
        <>
            <img className='jDvIgD' src={image[background]} alt="Mario" />

            <Navbar />

            <Chat />

            <div className='radio-footer'>

                <AudioNav />

            </div>

        </>
    )
}
