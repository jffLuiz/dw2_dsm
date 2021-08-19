import React from 'react'

import './Titulo.css'

export default function Titulo(props) {
    return (
        <div className="titulo">

            <h4> {props.texto} </h4>

        </div>
    )
}

