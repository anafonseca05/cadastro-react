import React, { useState } from 'react';
import './styles.css'; // Importar CSS

function App() {
  // Estado para armazenar as equipes
  const [teams, setTeams] = useState([]);
  const [teamData, setTeamData] = useState({
    name: '',
    members: '',
    rms: '',
    theme: ''
  });

  const [editIndex, setEditIndex] = useState(null);

  // Função para lidar com alterações no formulário
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTeamData({ ...teamData, [name]: value });
  };

  // Função para cadastrar ou atualizar uma equipe
  const handleRegister = () => {
    if (editIndex === null) {
      // Criar nova equipe
      setTeams([...teams, teamData]);
    } else {
      // Editar equipe existente
      const updatedTeams = [...teams];
      updatedTeams[editIndex] = teamData;
      setTeams(updatedTeams);
      setEditIndex(null); // Resetar o estado de edição
    }

    // Limpar o formulário
    setTeamData({
      name: '',
      members: '',
      rms: '',
      theme: ''
    });
  };

  // Função para editar uma equipe
  const handleEdit = (index) => {
    setTeamData(teams[index]);
    setEditIndex(index);
  };

  // Função para deletar uma equipe
  const handleDelete = (index) => {
    const filteredTeams = teams.filter((_, i) => i !== index);
    setTeams(filteredTeams);
  };

  return (
    <div>
      <header>
        <a href="#" className="logo"><img src="logoFieb.png" alt="Logo" /></a>
        <div className="bx bx-menu" id="menu-icon"></div>
        <ul className="navbar">
          <li><a href="#home">HOME</a></li>
          <li><a href="#shop">AVALIAÇÕES</a></li>
        
    
          <li><a href="#app">CADASTRO PROJETO</a></li>
        </ul>
      </header>

      <main>
        <div id="container">
          <h2>Cadastro de Projeto</h2>
          <label htmlFor="name">
            <p>Nome do Projeto</p>
            <input
              type="text"
              name="name"
              value={teamData.name}
              onChange={handleInputChange}
              placeholder="Nome do Projeto"
            />
          </label>
          <label htmlFor="members">
            <p>Nome dos Integrantes</p>
            <input
              type="text"
              name="members"
              value={teamData.members}
              onChange={handleInputChange}
              placeholder="Nome dos Integrantes do Projeto"
            />
          </label>
          <label htmlFor="rms">
            <p>RM dos Integrantes</p>
            <input
              type="text"
              name="rms"
              value={teamData.rms}
              onChange={handleInputChange}
              placeholder="RM dos Integrantes do Projeto"
            />
          </label>
          <label htmlFor="theme">
            <p>Tema do Projeto</p>
            <input
              type="text"
              name="theme"
              value={teamData.theme}
              onChange={handleInputChange}
              placeholder="Tema do Projeto"
            />
          </label>

          <button id="button-register" onClick={handleRegister}>
            {editIndex === null ? 'Cadastrar' : 'Atualizar'}
          </button>

          <div className="team-list">
            <h3>Projetos Cadastrados</h3>
            <ul>
              {teams.map((team, index) => (
                <li key={index}>
                  <p><strong>Projeto:</strong> {team.name}</p>
                  <p><strong>Integrantes:</strong> {team.members}</p>
                  <p><strong>RMs:</strong> {team.rms}</p>
                  <p><strong>Tema:</strong> {team.theme}</p>
                  <button onClick={() => handleEdit(index)}>Editar</button>
                  <button onClick={() => handleDelete(index)}>Excluir</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
