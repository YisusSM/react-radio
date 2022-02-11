import React from 'react';
import './index.css';

export const HelpCommands = () => {
    const mensaje = "/login <email>  <password>"
    return <>
        <ul className='card'>
            <li>
                {mensaje}
            </li>
        </ul>

    </>;
};
