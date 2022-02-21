import React from 'react';
import './index.css';

export const HelpCommands = () => {
    const mensaje = [
        "Available commands:",
        "/register <username> <email> <password> - Register to be able to log in",
        "/login <email>  <password> - Sign in to be able to send messages",
        "/logout - sign out",
        "/giphy Comming soon :)",
        "/history Comming soon :)"]
    return <>
        <ul className='card'>
        {/* <div style={{
                'position': 'fixed',
                'right': '32px',
                'fontSize': '0.9rem',
                'color': 'grey'
            }}>x</div> */}
            <li style={{
                'color': 'grey',
                'padding': '8px',
                'fontSize': '0.9rem'
            }}>
                {mensaje[0]}<br />
                {mensaje[1]}<br />
                {mensaje[2]}<br />
                {mensaje[3]}<br />
                {mensaje[4]}<br />
                {mensaje[5]}
            </li>
        </ul>

    </>;
};
