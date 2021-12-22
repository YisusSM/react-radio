import React, { useEffect } from 'react';

import { AudioNav } from './AudioNav';
import { Chat } from './Chat';

import mario from '../assets/mario.gif'
import '../components/index.css'
import { radioStartGetInfo } from '../actions/radio';
import { useDispatch } from 'react-redux';


export const RadioScreen = () => {
    const dispatch = useDispatch();
    useEffect(() => {

        dispatch(radioStartGetInfo());
    }, [dispatch])
    setInterval(() => {
        dispatch(radioStartGetInfo());
    }, 4000);
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
