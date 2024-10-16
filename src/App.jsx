import React from 'react';
import './styles.css'; // Importando o CSS

function App() {
    return (
        <div>
            <header>
                <a href="#" className="logo"><img src="logoFieb.png" alt="" /></a>
                <div className="bx bx-menu" id="menu-icon"></div>
                <ul className="navbar">
                    <li><a href="#home">HOME</a></li>
                    <li><a href="#shop">AVALIAÇÕES</a></li>
                    <li><a href="#delivery">TEMAS</a></li>
                    <li><a href="#about">SOBRE NÓS</a></li>
                    <li><a href="#contact">CADASTRO GRUPO</a></li>
                    <li><a href="#app">CADASTRO PROJETO</a></li>
                </ul>
            </header>

            <main>
                <div id="container">
                    <h2>Cadastro de Equipes</h2>
                    <label htmlFor="team">
                        <p>Nome da Equipe</p>
                        <input type="text" name="team" id="team" placeholder="Nome da Equipe" />
                    </label>
                    <label htmlFor="members">
                        <p>Nome dos Integrantes</p>
                        <input type="text" name="members" id="members" placeholder="Nome dos Integrantes da Equipe" />
                    </label>
                    <label htmlFor="rms">
                        <p>RM dos Integrantes</p>
                        <input type="text" name="rms" id="rms" placeholder="RM dos Integrantes da Equipe" />
                    </label>
                    <label htmlFor="theme">
                        <p>Tema da Equipe</p>
                        <input type="text" name="theme" id="theme" placeholder="Tema da Equipe" />
                    </label>

                    <button id="button-register" onClick={() => { /* Função para cadastrar */ }}>Cadastrar</button>
                    <button id="button-edit" className="hidden actions" onClick={() => { /* Função para editar */ }}>
                        <i className="fa-solid fa-pencil"></i>
                    </button>
                </div>
            </main>
        </div>
    );
}

export default App;
