import React, { useState } from 'react';

const TeamForm = ({ addTeam }) => {
  const [name, setName] = useState('');
  const [holders, setHolders] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTeam = { id: Math.random(), name, holders: parseInt(holders) };
    addTeam(newTeam);
    setName('');
    setHolders('');
  };

  return (
    <div id="container">
      <h2>Cadastro de Equipes</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nome da Equipe
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome da Equipe" />
        </label>
        <label>
          Número de Titulares
          <input type="number" value={holders} onChange={(e) => setHolders(e.target.value)} placeholder="Titulares" />
        </label>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default TeamForm;
