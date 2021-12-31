import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeBackground, uiChangeVisibilityChat } from '../actions/ui';
import './index.css';

export const Navbar = () => {
    const dispatch = useDispatch();
    const { background, chat } = useSelector(state => state.ui)

    const handleBackground = () => {
        var number = Math.floor(Math.random() * (7 - 0)) + 0;
        if (number !== background) {
            dispatch(changeBackground(number));
        } else { handleBackground() }
    }

    const handleChatVisibility=()=>{
        dispatch(uiChangeVisibilityChat(!chat));

    }

    return (
        <>
            <div className="radio-navbar">
                <i class="bi bi-broadcast svgIcon"></i>
                <div className="radio-navbar-icons-container">
                    <div className="radio-navbar-icons-container_icon">
                        <i class="bi bi-image svgIcon" onClick={handleBackground}></i>
                        {chat ? <i class="bi bi-chat-left svgIcon" onClick = {handleChatVisibility}></i> : <i class="bi bi-chat-left-text svgIcon" onClick = {handleChatVisibility}></i>}

                    </div>

                </div>
            </div>

        </>
    )
}
