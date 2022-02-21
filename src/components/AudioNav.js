import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Sliderbar } from './Slidebar';
import '../components/index.css';
import { uiExitFullscreen, uiOpenFullscreen } from '../actions/ui';



export const AudioNav = () => {
    const { name, author, listeners } = useSelector(state => state.radio)
    const { Fullscreen } = useSelector(state => state.ui)
    const [loading, setLoading] = useState(false);
    const [btnPlay, setBtnPlay] = useState(true)
    const [value, setValue] = useState(40);
    const [src, setSrc] = useState(null);
    const audioElement = useRef();
    const dispatch = useDispatch();





    const togglPlayPause = () => {
        if (btnPlay) {
            setLoading(true);
            if (src === 'https://low-radio-node.herokuapp.com/listen') {
                audioElement.current.play();
                setTimeout(() => {
                    setLoading(false);
                    setBtnPlay(!btnPlay);
                }, 8500);
            } else {
                setLoading(true);
                setSrc('https://low-radio-node.herokuapp.com/listen')
                setTimeout(() => {
                    audioElement.current.play();
                }, 0.5);
                setTimeout(() => {
                    setLoading(false);
                    setBtnPlay(!btnPlay);
                }, 8000);

            }
        }
        else {
            audioElement.current.pause();
            setBtnPlay(!btnPlay);
            setSrc('null')
        }

    }

    const openFullscreen = () => {
        dispatch(uiOpenFullscreen())
    }
    const exitFullscreen = () => {
        dispatch(uiExitFullscreen())
    }

    const handleVolumenChange = (e) => {

        audioElement.current.volume = e;
    }

    useEffect(() => {
        handleVolumenChange(value / 100);
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className='radio-footer__info'>
            <div className="radio-footer__info-favorite">
                <i className="bi bi-star svgIcon"></i>
            </div>
            <div className='radio-footer__info-song SuiTypography-Body1'>
                <label>{name}<br />{author === 'BUG BUNNY' ?
                    <span className="bugbunny">{author}</span> : <span >{author}</span>}</label>
            </div>
            <div className="radio-footer__info-listeners">
                <label>Listeners: {listeners}</label>
            </div>
            <div className='radio-footer__info-playbtn'>
                {(loading ? <div className="loader" id="loader"></div> : null)}
                {btnPlay & loading ?
                    <i className="bi bi-play-fill btnPlay svgIcon" disabled style={{'color':'grey'}}></i> :
                    btnPlay & !loading ?
                        <i className="bi bi-play-fill btnPlay svgIcon" onClick={togglPlayPause}></i> :
                        <i className="bi bi-pause-fill btnPlay svgIcon" onClick={togglPlayPause}></i>}
            </div>
            <div className='radio-footer__info-volume'>
                <audio ref={audioElement} src={src} ></audio>
                {value > 55 ?
                    <i className="bi bi-volume-up-fill svgIcon"></i>
                    :
                    value > 15 ?
                        <i className="bi bi-volume-down-fill svgIcon"></i> :
                        <i className="bi bi-volume-off-fill svgIcon"></i>
                }
            </div>
            <div className="radio-footer__info-volume-slider">
                <Sliderbar value={value} id='slide' onChange={e => {
                    setValue(e.target.value);
                    handleVolumenChange(e.target.value / 100);
                }} />
            </div>
            <div className='radio-footer__info-access'>
                {!Fullscreen ? <i className="bi bi-fullscreen svgIcon" onClick={openFullscreen}></i> : <i className="bi bi-fullscreen-exit svgIcon" width="100px" height="100px" onClick={exitFullscreen} ></i>}
            </div>


        </div >
    )
}
