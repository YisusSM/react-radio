import React from 'react';
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import '../index.css';
import ChatRoom from './ChatRoom';
import { commands } from './chatHelpers.js/helper';
import { uiChangeVisibilityHelp } from '../../actions/ui';

export const Chat = () => {
    const dispatch = useDispatch()
    const { chat, help } = useSelector(state => state.ui);
    const auth = useSelector(state => state.auth);
    const [formValue, handleFormValueChange, reset] = useForm({
        message: '',
        gif: false
    });


    const { message } = formValue;
    const handleSubmit = (e) => {
        e.preventDefault();
        commands(message, auth.uid, auth.verified, auth.displayName, dispatch, auth.admin);
        reset();
    }
    const handleHelpVisibility = () => {
        dispatch(uiChangeVisibilityHelp(!help));
    }
    return (
        <>
            <div className={`chat-container ${!chat ? "hidden" : ""}`}>
                <div className="chat-container__toolbar">
                    <h6 className="chat-container__toolbar-title">CHAT</h6>
                </div>
                <div className="chat-container-scroll-to-bottom">
                    <div className="chat-container__messages">
                        <ChatRoom />
                    </div>
                </div>
                <div className="chat-container__textbox-title">
                    <h6><span className="chat-container__textbox-title-arrow">→</span> RADIO GIT:(<span className="chat-container__textbox-title-span-color">MAIN</span>)</h6>
                </div>
                <div className="chat-container__text-area">
                    <form onSubmit={handleSubmit}>
                        <input placeholder="Commit here..."
                            name="message"
                            onChange={handleFormValueChange}
                            autoComplete='off'
                            value={message}></input>
                        <i className="bi bi-question-circle svgIcon help" onClick={handleHelpVisibility} ></i>
                        <button><i className="bi bi-send-fill" style={{
                            color: 'white',
                            fontSize: '1.6rem',
                            padding: '8px',
                            transition: '.2s'
                        }} id="send-button"></i></button>
                    </form>
                </div>

            </div>
        </ >
    )
}


