import React from 'react';

const TeamList = ({ teams, updateTeam, deleteTeam }) => {
  return (
    <div id="list-teams">
      {teams.map((team) => (
        <div key={team.id} className="cards">
          <p>Nome da equipe: {team.name}</p>
          <p>Titulares: {team.holders}</p>
          <button onClick={() => deleteTeam(team.id)}>Deletar</button>
          {/* Implementar atualização e detalhes se necessário */}
        </div>
      ))}
    </div>
  );
};

export default TeamList;
