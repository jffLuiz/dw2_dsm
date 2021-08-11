import React from "react"
import "./menuHorizontal.css"

export default function Menu() {
    return (
        <div>
            <div className="menu">
                <nav className="navMenu">
                    <ul>
                        <li> <a href="#inicio">Nosso Canal</a></li>
                        <li> <a href="#cursos">Cursos</a></li>
                        <li> <a href="#contatos">Contatos</a></li>
                        <li> <a href="#parceiros">parceiros</a></li>
                        <li> <a href="#missao">Missão</a></li>
                        <li> <a href="#sobre">Sobre</a></li>
                    </ul>
                </nav>
                <section id="inicio">
                    <h1>Início</h1>
                </section>
                <section id="cursos">
                    <h1>Cursos</h1>
                </section>
                <section id="contatos">
                    <h1>Contatos</h1>
                </section>
                <section id="parceiros">
                    <h1>parceiros</h1>
                </section>
                <section id="missao">
                    <h1>Missão</h1>
                </section>
                <section id="sobre">
                    <h1>Sobre</h1>
                </section>

                <a class="irTopo" href="#menu">Topo</a>
                <a class="irTopo" href="#inicio">Nosso Canal</a>
                <a class="irTopo" href="#menu">Cursos</a>
                <a class="irTopo" href="#menu">Contatos</a>
                <a class="irTopo" href="#menu">Parceiros</a>
                <a class="irTopo" href="#menu">Missão</a>
                <a class="irTopo" href="#menu">Sobre</a>

                <footer>
                    <h2>Rodapé</h2> 
                </footer>
            </div>
        </div>
    )   
}