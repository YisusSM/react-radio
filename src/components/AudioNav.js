import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Sliderbar } from './Slidebar';
import '../components/index.css';
import { uiExitFullscreen, uiOpenFullscreen } from '../actions/ui';
var cont = 0;
let temp = 0;

export const AudioNav = () => {
    const { name, author, listeners } = useSelector(state => state.radio)
    const { Fullscreen } = useSelector(state => state.ui)
    const [btnPlay, setBtnPlay] = useState(true)
    const [value, setValue] = useState(100);
    const [src, setSrc] = useState(null);
    const audioElement = useRef();
    const dispatch = useDispatch();

    const togglPlayPause = () => {

        if (btnPlay) {
            console.log(btnPlay, 'play')
            if (src === 'http://187.147.8.112:2000/listen') {
                audioElement.current.play();
                clearInterval(temp);
            } else {
                setSrc('http://187.147.8.112:2000/listen');
                setTimeout(() => {
                    audioElement.current.play();
                    console.log('hola')
                }, 8000);
                clearInterval(temp);
            }
            // time(!btnPlay);
        }
        else {
            console.log(btnPlay, 'pause')
            audioElement.current.pause();
            // time(!btnPlay);
            // audioElement.current.src = '';
            temp = setInterval(() => {
                cont++;
                console.log(cont);
            }, 1000);
        }
        setBtnPlay(!btnPlay);
    }
    const openFullscreen = () => {
        dispatch(uiOpenFullscreen())
    }
    const exitFullscreen = () => {
        dispatch(uiExitFullscreen())
    }

    // const resumeRadio = () => {
    //     audioElement.current.currentTime += cont + 1;
    //     clearInterval(temp);
    //     cont = 0;
    //     togglPlayPause();
    // }


    const handleVolumenChange = (e) => {

        audioElement.current.volume = e;
    }
    return (
        <div className='radio-footer__info'>
            <div className="radio-footer__info-favorite">
                <i className="bi bi-star svgIcon"></i>
            </div>
            <div className='radio-footer__info-song SuiTypography-Body1'>
                <label>{name}<br />{author}</label>
            </div>
            <div className="radio-footer__info-listeners">
                <label>Listeners: {listeners}</label>
            </div>
            <div className='radio-footer__info-playbtn'>
                {btnPlay ? <i className="bi bi-play-fill btnPlay svgIcon" onClick={togglPlayPause}></i> : <i className="bi bi-pause-fill btnPlay svgIcon" onClick={togglPlayPause}></i>}
                {/* <label onClick={resumeRadio}>Live</label> */}
            </div>
            <div className='radio-footer__info-volume'>
                <audio ref={audioElement} src={src} ></audio>
                {value > 60 ?
                    <i className="bi bi-volume-up-fill svgIcon"></i>
                    :
                    value > 30  ?
                        <i className="bi bi-volume-down-fill svgIcon"></i> :
                        <i className="bi bi-volume-off-fill svgIcon"></i>
                }
                <div className="radio-footer__info-volume-slider">
                    <Sliderbar value={value} onChange={e => {
                        setValue(e.target.value);
                        handleVolumenChange(e.target.value / 100);
                    }} />
                </div>
            </div>
            <div className='radio-footer__info-access'>
                {!Fullscreen ? <i className="bi bi-fullscreen svgIcon" onClick={openFullscreen}></i> : <i className="bi bi-fullscreen-exit svgIcon" width="100px" height="100px" onClick={exitFullscreen} ></i>}
            </div>


        </div>
    )
}
