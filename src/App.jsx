import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.css';

function App() {
  const [teams, setTeams] = useState([]);
  const [teamData, setTeamData] = useState({
    name: '',
    members: '',
    rms: '',
    theme: ''
  });
  const [editIndex, setEditIndex] = useState(null);

<<<<<<< HEAD
  // Função para carregar os dados existentes do backend
  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await axios.get('http://localhost:8080/projeto');
        setTeams(response.data);
      } catch (error) {
        console.error("Erro ao buscar projetos:", error);
      }
    };
    fetchTeams();
  }, []);
=======
            <main>
                <div id="container">
                    <h2>Cadastro de Projetos</h2>
                    <label htmlFor="team">
                        <p>Nome da Projeto</p>
                        <input type="text" name="team" id="team" placeholder="Nome do Projeto" />
                    </label>
                    <label htmlFor="members">
                        <p>Nome dos Integrantes</p>
                        <input type="text" name="members" id="members" placeholder="Nome dos Integrantes do Projeto" />
                    </label>
                    
                    <label htmlFor="theme">
                        <p>Proposta</p>
                        <input type="text" name="theme" id="theme" placeholder="Proposta" />
                    </label>
>>>>>>> 467d62f044e147792ee15aeeadcfbe1afd8e8320

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTeamData({ ...teamData, [name]: value });
  };

  const handleRegister = async () => {
    if (!teamData.name || !teamData.members || !teamData.rms || !teamData.theme) {
      alert('Por favor, preencha todos os campos!');
      return;
    }

    try {
      if (editIndex === null) {
        // Criar novo projeto
        const response = await axios.post('http://localhost:8080/projeto', teamData);
        setTeams([...teams, response.data]);
        alert('Projeto Cadastrado com Sucesso');
      } else {
        // Atualizar projeto existente
        const response = await axios.put(`http://localhost:8080/projeto/${teamData.rms}`, teamData);
        const updatedTeams = [...teams];
        updatedTeams[editIndex] = response.data;
        setTeams(updatedTeams);
        setEditIndex(null);
        alert('Projeto Atualizado com Sucesso');
      }
      setTeamData({ name: '', members: '', rms: '', theme: '' });
    } catch (error) {
      console.error("Erro ao cadastrar/atualizar projeto:", error);
    }
  };

  const handleEdit = (index) => {
    setTeamData(teams[index]);
    setEditIndex(index);
  };

  const handleDelete = async (index) => {
    try {
      const id = teams[index].rms;
      await axios.delete(`http://localhost:8080/projeto/${id}`);
      setTeams(teams.filter((_, i) => i !== index));
      alert('Projeto Excluído com Sucesso');
    } catch (error) {
      console.error("Erro ao excluir projeto:", error);
    }
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

          <label htmlFor="rms">
            <p>ID</p>
            <input
              type="number"
              name="rms"
              value={teamData.rms}
              onChange={handleInputChange}
              placeholder="ID"
            />
          </label>

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

          <label htmlFor="theme">
            <p>Proposta</p>
            <input
              type="text"
              name="theme"
              value={teamData.theme}
              onChange={handleInputChange}
              placeholder="Proposta"
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
