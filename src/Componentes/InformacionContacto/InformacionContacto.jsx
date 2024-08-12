import React from 'react'
import './InformacionContacto.css'
import { BsBell,  BsBookmark, BsClockHistory, BsHandThumbsDown, BsHeart, BsPersonSlash, BsRocketTakeoff } from "react-icons/bs";
import { MdOutlinePhoto } from "react-icons/md";
import { useParams } from 'react-router-dom';
import { obtenerContactoPorId } from '../../helpers/contactos';


/**
 * Un componente funcional que renderiza información sobre un contacto.
 *
 * Obtiene el ID del contacto de la URL y lo utiliza para obtener la información del contacto.
 * 
 * @return {JSX.Element} El elemento JSX que representa la información del contacto.
 */
const InformacionContacto = () => {

    const { id } = useParams()
    const contacto = obtenerContactoPorId(id)
    const { telefono, estado } = contacto.informacion

    return (
        <main className='main-informacion'>
            <section className='info'>
                <p>{telefono}</p>
            </section>
            <section className='info'>
                <p>{estado}</p>
            </section>
            <section className='info'>
                <p><BsBell />Notificaciones</p>
                <p><MdOutlinePhoto />Visibilidad de archivos intergalácticos</p>
                <p><BsBookmark />Mensajes conservados</p>
            </section >
            <section className='info'>
                <p><BsRocketTakeoff />Cifrado</p>
                <span>Los mensajes y las llamadas están cifrados de extremo a extremo de la galaxia. Toca para verificarlo.</span>
                <p><BsClockHistory />Mensajes temporales</p>
                <span>Desactivado</span>
            </section >
            <section className='info'>
                <p><BsHeart />Añadir a Favoritos</p>
                <p className='rojo'><BsPersonSlash />Bloquear usuario</p>
                <p className='rojo'><BsHandThumbsDown />Reportar usuario</p>
            </section>
        </main>
    )
}

export default InformacionContacto