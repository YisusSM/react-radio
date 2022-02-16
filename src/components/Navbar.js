import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeBackground, uiChangeVisibilityChat } from '../actions/ui';
import './index.css';

export const Navbar = () => {
    const dispatch = useDispatch();
    const { background, chat } = useSelector(state => state.ui)

    const handleBackground = () => {
        var imageArrayIndex = Math.floor(Math.random() * (9 - 0)) + 0;
        if (imageArrayIndex !== background) {
            dispatch(changeBackground(imageArrayIndex));
        } else { handleBackground() }
    }

    const handleChatVisibility=()=>{
        dispatch(uiChangeVisibilityChat(!chat));

    }

 

    return (
        <>
            <div className="radio-navbar">
                <i className="bi bi-broadcast svgIcon"></i>
                <div className="radio-navbar-icons-container">
                    <div className="radio-navbar-icons-container_icon">
                        <i className="bi bi-image svgIcon" onClick={handleBackground}></i>
                        {chat ? <i className="bi bi-chat-left svgIcon" onClick = {handleChatVisibility}></i> : <i className="bi bi-chat-left-text svgIcon" onClick = {handleChatVisibility}></i>}

                    </div>

                </div>
            </div>

        </>
    )
}
