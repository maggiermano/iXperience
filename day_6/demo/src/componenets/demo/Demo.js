import React from 'react'

import './Demo.css';

export default function Demo(props) {
    return (
        <div>
            <div className={props.name === 'Jacques' ? 'green' : 'blue'}>
                demo {props.name} {props.surname}
            </div>
        </div>
    )
}