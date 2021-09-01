import React from 'react'

import './Inicio.css'
import Titulo from '../Titulo/Titulo.jsx'
import Logo from '../../imagens/LogoFatec.jpeg'

export default function Inicio() {
    return (
        <div>

            <Titulo texto = "Formulário inicial do projeto" />

            <div className="inicio">
                <button id="confirmar">Confirmar</button>
                <button id="salvar" onClick={() => {alert('Botão Clicado!')}}>Salvar</button>
                <figure>
                    <img id="logo" src={Logo} align="center" />
                </figure>


            </div>

        </div>

    )
}

