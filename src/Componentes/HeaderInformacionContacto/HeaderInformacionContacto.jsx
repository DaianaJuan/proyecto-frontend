import React from 'react'
import './HeaderInformacionContacto.css'
import { BsArrowLeftShort } from "react-icons/bs";
import { Link, useParams } from 'react-router-dom';
import { obtenerContactoPorId } from '../../helpers/contactos';
import { BsThreeDotsVertical } from "react-icons/bs";


/**
 * Un componente funcional que renderiza el encabezado de información de un contacto.
 *
 * Obtiene el ID del contacto de la URL y lo utiliza para obtener la información del contacto.
 * 
 * @return {JSX.Element} El elemento JSX que representa el encabezado de información del contacto.
 */
const HeaderInformacionContacto = () => {

    const { id } = useParams()
    const contacto = obtenerContactoPorId(id)

    return (
        <header className='contenedor-header-informacion'>
            <nav className='contenedor-nav-informacion'>
                <div className='flex-icos'>
                    <Link to={'/chat/' + id} className='flecha-volver'><BsArrowLeftShort /></Link>
                    <button><BsThreeDotsVertical /></button>
                </div>
                <div className='flex-nombre-img'>
                    <div className='contenedor-img'>
                        <img src={contacto.thumbnail}></img>
                    </div>
                    <p className='nombreInfo'>{contacto.nombre}</p>
                </div>
            </nav>
        </header>
    )
}

export default HeaderInformacionContacto