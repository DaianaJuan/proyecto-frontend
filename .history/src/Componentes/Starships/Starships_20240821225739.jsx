import React, { useEffect, useState } from 'react';
import './Starships.css';
import { BsArrowLeftShort } from 'react-icons/bs';
import { GiSpaceShuttle } from "react-icons/gi";
import { Link } from 'react-router-dom';
import { SiAwselasticloadbalancing } from 'react-icons/si';

const Starships = () => {
    const [starships, setStarships] = useState([]);
    const [loading, setLoading] = useState(true);

    // Función para cargar los datos de la API
    const fetchStarships = async () => {
        const response = await fetch('https://swapi.dev/api/starships/')
        const data = await response.json()
        setStarships(data.results);
        setLoading(false);
    }

    // Llamar a la función de carga de datos cuando el componente se monte
    useEffect(() => {
        fetchStarships();
    }, []); // El array vacío asegura que solo se ejecute una vez al montar el componente

    if (loading) {
        return <p>Cargando...</p>;
    }

    return (
        <div className='contenedor-naves'>
            <header className='header-naves'>
                <Link to='/' className='flecha'><BsArrowLeftShort /></Link>
                <h2>Naves vinculadas</h2>
                <button><GiSpaceShuttle /></button>
            </header>

            <ul className='starship-list'>
                {starships.map(starship => (
                    <li key={starship.name} className='starship-item'>
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
