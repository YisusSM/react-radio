import React from 'react';
import { useSelector } from 'react-redux';
import '../index.css';

export const Chat = () => {
    const {chat} = useSelector(state => state.ui)
    return (
        <div>
            <div className={`chat-container ${!chat?"hidden":""}`}>
                <div className="chat-container__toolbar">
                    <h6 className="chat-container__toolbar-title">CHAT</h6>
                </div>
            </div>
        </div>
    )
}
