import React, { useState } from 'react'
import './HeaderHomeContactos.css'
import { MdOutlineCameraAlt } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";


/**
 * Un componente funcional que renderiza el encabezado de la página de contactos de inicio.
 *
 * Recibe la consulta de búsqueda y una función de callback para manejar cambios en la entrada de búsqueda.
 *
 * @param {string} search - La consulta de búsqueda actual.
 * @param {function} onSearchChange - Una función de callback para manejar cambios en la entrada de búsqueda.
 * @return {JSX.Element} El elemento JSX que representa el encabezado.
 */
const HeaderHomeContactos = ({ search, onSearchChange }) => {

    /**
     * Maneja el evento de cambio del campo de búsqueda.
     *
     * @param {object} e - El objeto de evento que contiene información sobre el evento de cambio.
     * @return {void}
     */
    const handleChange = (e) => {
        if (typeof onSearchChange === 'function') {
            onSearchChange(e.target.value);
        }
    }
    


    return (
        <header className='contenedor-header-home'>
            <nav>
                <div className='flex-superior'>
                    <h1 className='nombre-app'>StarWars <br />Chat</h1>
                    <div className='contenedor-icons'>
                        <button><MdOutlineCameraAlt /></button>

                        <div className={`dropdown ${isOpen ? 'active' : ''}`}>
                            <button className='dropdown-button' onClick={toogleDropdown}>
                                <BsThreeDotsVertical />
                            </button>
                            <div className='dropdown-content'>
                                <a href="#">Naves vinculadas</a>
                                <a href="#">Mensajes destacados</a>
                                <a href="#">Planetas</a>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className='flex-inferior'>
                    <div className='input-buscador'>
                        <label htmlFor="nombre"></label>
                        <input
                            type="text"
                            placeholder="Buscar"
                            onChange={handleChange}
                            value={search}
                        />
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default HeaderHomeContactos