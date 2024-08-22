import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Movies.css'
import { BsArrowLeftShort } from 'react-icons/bs';
import { GiFilmSpool } from "react-icons/gi";

const Movies = () => {

    const movieImages = {
        1: './',
        2: '/images/episode2.jpg',
        3: '/images/episode3.jpg',
        4: '/images/episode4.jpg',
        5: '/images/episode5.jpg',
        6: '/images/episode6.jpg',
    }

    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)
    
        // Función para cargar los datos de la API
        const fetchMovies = async () => {
            const response = await fetch('https://swapi.dev/api/films/')
            const data = await response.json()
            setMovies(data.results)
            setLoading(false)
        };
    
        useEffect(() => {
            fetchMovies()
        }, []);
    
        if (loading) {
            return <p>Cargando...</p>
        }
    

    return (
        <div className='contenedor-movies'>
            <header className='header-movies'>
                <Link to='/' className='flecha'><BsArrowLeftShort /></Link>
                <h2>Lista de Películas</h2>
                <button><GiFilmSpool /></button>
            </header>

            <ul className='movie-list'>
                {movies.map(movie => (
                    <li key={movie.episode_id} className='movie-item'>
                        <h3>{movie.title}</h3>
                        <p><strong>Director:</strong> {movie.director}</p>
                        <p><strong>Productor:</strong> {movie.producer}</p>
                        <p><strong>Fecha de Lanzamiento:</strong> {movie.release_date}</p>
                        <p><strong>Descripción:</strong> {movie.opening_crawl}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Movies;
