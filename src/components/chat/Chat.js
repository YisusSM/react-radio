import React from 'react';
import { useSelector } from 'react-redux';
import '../index.css';

export const Chat = () => {
    const { chat } = useSelector(state => state.ui)
    return (
        <div>
            <div className={`chat-container ${!chat ? "hidden" : ""}`}>
                <div className="chat-container__toolbar">
                    <h6 className="chat-container__toolbar-title">CHAT</h6>
                </div>
                <div className="chat-container__messages">

                </div>
                <div className="chat-container__textbox-title">
                    <h6><span className="chat-container__textbox-title-arrow">→</span> RADIO GIT:(<span className="chat-container__textbox-title-span-color">MAIN</span>)</h6>
                </div>
                <div className="chat-container__text-area">
                    <input placeholder="Commit here..."></input>
                    <i class="bi bi-question-circle svgIcon" ></i>
                    <i class="bi bi-send-fill svgIcon" id="send-button"></i>
                </div>

            </div>
        </div>
    )
}
