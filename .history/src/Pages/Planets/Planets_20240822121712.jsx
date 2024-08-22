import React, { useEffect, useState } from 'react';
import './P';
import { BsArrowLeftShort } from 'react-icons/bs';
import { BiSolidPlanet } from "react-icons/bi";
import { Link } from 'react-router-dom';

const Planets = () => {
    const [planets, setPlanets] = useState([])
    const [loading, setLoading] = useState(true)

    // Función para cargar los datos de la API
    const fetchPlanets = async () => {
        const response = await fetch('https://swapi.dev/api/planets/')
        const data = await response.json()
        setPlanets(data.results)
        setLoading(false)
    };

    useEffect(() => {
        fetchPlanets()
    }, []);

    if (loading) {
        return <p>Cargando...</p>
    }

    return (
        <div className='contenedor-planetas'>
            <header className='header-planetas'>
                <Link to='/' className='flecha'><BsArrowLeftShort /></Link>
                <h2>Planetas Cercanos</h2>
                <button><BiSolidPlanet /></button>
            </header>

            <ul className='planet-list'>
                {planets.map(planet => (
                    <li key={planet.name} className='planet-item'>
                        <h3>{planet.name}</h3>
                        <p><strong>Clima:</strong> {planet.climate}</p>
                        <p><strong>Terreno:</strong> {planet.terrain}</p>
                        <p><strong>Duración del Día:</strong> {planet.rotation_period} horas</p>
                        <p><strong>Duración del Año:</strong> {planet.orbital_period} días</p>
                        <p><strong>Diámetro:</strong> {planet.diameter} km</p>
                        <p><strong>Población:</strong> {planet.population}</p>
                        <p><strong>Gravedad:</strong> {planet.gravity}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Planets;
