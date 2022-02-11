import React, { useEffect } from 'react';
import { db } from '../../firebase/firebaseConfig';
import { onSnapshot } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { query, orderBy, limit } from "firebase/firestore";
import '../index.css';
import './index.css';
import { useDispatch, useSelector } from 'react-redux';
import { clearMessages, loadMessages } from '../../actions/messages';
import { Gif } from './GifsChat/Gif';
import { HelpCommands } from './HelpCommands';

export const ChatRoom = () => {


    let messageList;
    const dispatch = useDispatch();
    const { state } = useSelector(state => state.msg)
    const { error, help } = useSelector(state => state.ui)

    useEffect(() => {

        const q = query(collection(db, 'room'), orderBy('createdAt', 'desc'), limit(50));
        onSnapshot(q, (snapshot => {
            dispatch(clearMessages());
            snapshot.forEach(item => {

                dispatch(loadMessages({
                    id: item.id,
                    message: item.data().message,
                    createdAt: item.data().createdAt,
                    author: item.data().author,
                    admin: item.data().admin
                }))

            })
        }))

    }, [dispatch])



    messageList = (state ? state.map(state => {
        // return (!state.admin ? <li className="message" key={state.id}
        // ><span style={{ color: 'grey' }}>{state.author}</span> {state.message}</li> :
        //     <li className="message" key={state.id}
        //     ><span style={{ color: 'grey' }}>{state.author} <span
        //         style={{
        //             fontSize: 10,
        //             color: 'red'
        //         }}>[MOD]</span></span> {state.message}</li>)
        return (state.gif ? <Gif
            key={state.id}
            img={state.img}
        /> : !state.admin ? <li
            className="message"
            key={state.id}><span
                style={{ color: 'grey' }}>{state.author}</span> {state.message}</li> : <li className="message" key={state.id}><span style={{ color: 'grey' }}>{state.author} <span
                    style={{
                        fontSize: 10,
                        color: 'red'
                    }}>[MOD]</span></span> {state.message}</li>)
    }) : null)

    // return (state.gif ? <Gif
    //     key={state.id}
    //     img={state.img}
    // /> : !state.admin ? <li
    //     className="message"
    //     key={state.id}><span
    //         style={{ color: 'grey' }}>{state.author}</span> {state.message}</li> : <li className="message" key={state.id}><span style={{ color: 'grey' }}>{state.author} <span
    //         style={{
    //             fontSize: 10,
    //             color: 'red'
    //         }}>[MOD]</span></span> {state.message}</li>)
    return (
     
            <ul className="chat-container__messages-list">
                {messageList}
                {(error ? <li className="message">{error}</li> : null)}
                {(help ? <HelpCommands /> : null)}
            </ul>
     

    )
}