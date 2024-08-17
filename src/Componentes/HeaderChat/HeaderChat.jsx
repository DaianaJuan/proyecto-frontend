import React from 'react'
import { BsArrowLeftShort } from "react-icons/bs";
import { MdOutlineVideocam } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import './HeaderChat.css'
import { Link, useParams } from 'react-router-dom';
import { obtenerContactoPorId, obtenerContactos } from '../../helpers/contactos'

/**
 * A functional component that renders the chat header.
 * 
 * It retrieves the contact ID from the URL and uses it to obtain the contact information.
 * 
 * @return {JSX.Element} The JSX element representing the chat header.
 */
const HeaderChat = () => {
    obtenerContactos()
    const { id } = useParams();  // Obtenemos el ID del contacto desde la URL
    const contacto = obtenerContactoPorId(id);  // Obtenemos el contacto por su ID


    return (
        <header className='contenedor-header'>
            <nav className='contenedor-nav'>
                <div className='contenedor-izquierda'>
                    <Link to='/' className='flecha'><BsArrowLeftShort /></Link>
                    <div className='contenedor-img'>
                        <img src={contacto.thumbnail}></img>
                    </div>
                    <Link to={'/informacion/' + id} className='nombre'>{contacto.nombre}</Link>
                </div>
                <div className='contenedor-derecha'>
                    <button><MdOutlineVideocam /></button>
                    <button><MdOutlinePhone /></button>
                    <button><BsThreeDotsVertical /></button>
                </div>
            </nav>
        </header>
    )
}

export default HeaderChat