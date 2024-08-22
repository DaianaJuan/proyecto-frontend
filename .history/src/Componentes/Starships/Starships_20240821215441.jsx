import React, { useEffect, useState } from 'react';
import './Starships.css'; // Asegúrate de crear un archivo CSS para estilos

const Starships = () => {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    // Fetch starships data from the API
    fetch('https://swapi.dev/api/starships/')
      .then(response => response.json())
      .then(data => setStarships(data.results));
  }, []);

  return (
    <div>
      <h2>Naves</h2>
      <ul className="starship-list">
        {starships.map(starship => (
          <li key={starship.name} className="starship-item">
            <h3>{starship.name}</h3>
            <p><strong>Modelo:</strong> {starship.model}</p>
            <p><strong>Fabricante:</strong> {starship.manufacturer}</p>
            <p><strong>Coste:</strong> {starship.cost_in_credits} créditos</p>
            <p><strong>Longitud:</strong> {starship.length} metros</p>
            <p><strong>Tripulación:</strong> {starship.crew}</p>
            <p><strong>Pasajeros:</strong> {starship.passengers}</p>
            <p><strong>Cargamento:</strong> {starship.cargo_capacity} kg</p>
            <p><strong>Velocidad Máxima:</strong> {starship.max_atmosphering_speed} km/h</p>
            <p><strong>Clase:</strong> {starship.starship_class}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Starships;
