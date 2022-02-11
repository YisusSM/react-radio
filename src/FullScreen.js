import React from 'react';
import { useSelector } from 'react-redux';
import { RadioScreen } from './components/RadioScreen';


export const FullScreen = () => {
    const { Fullscreen } = useSelector(state => state.ui);
    const elem = document.documentElement;
    if (Fullscreen) {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) { /* Safari */
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE11 */
            elem.msRequestFullscreen();
        }
    }
        if ((document.fullscreenElement ||
            document.webkitFullscreenElement ||
            document.mozFullScreenElement) && !Fullscreen) {
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
            <RadioScreen />
        </>
    )
}
