import React from 'react';

const Header = () => {
  return (
    <header>
      <a href="#" className="logo"><img src="logoFieb.png" alt="Logo" /></a>
      <nav className="navbar">
        <ul>
          <li><a href="#home">HOME</a></li>
          <li><a href="#shop">AVALIAÇÕES</a></li>
          <li><a href="#delivery">TEMAS</a></li>
          <li><a href="#about">SOBRE NÓS</a></li>
          <li><a href="#contact">CADASTRO GRUPO</a></li>
          <li><a href="#app">CADASTRO PROJETO</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
