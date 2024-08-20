import React, { useState, useEffect } from 'react';
import ListaMensajes from '../../Componentes/ListaMensajes/ListaMensajes';
import FooterChat from '../../Componentes/FooterChat/FooterChat';
import { formatearFecha } from '../../helpers/contactos';
import { v4 as uuidv4 } from 'uuid';
import { useParams } from 'react-router-dom';
import './Chat.css';
import HeaderChat from '../../Componentes/HeaderChat/HeaderChat';


/**
 * Un componente funcional que renderiza una interfaz de chat con lista de mensajes y campo de entrada.
 * 
 * @return {JSX.Element} El elemento JSX que representa la interfaz de chat.
 */
const Chat = () => {

    const { id } = useParams()
    const [listaMensajes, setListaMensajes] = useState([])
    const [formMensaje, setFormMensaje] = useState({ contenido: '' })

    useEffect(() => {
        const contactos = JSON.parse(localStorage.getItem('contactos')) || []
        const contacto = contactos.find(c => c.id_autor === Number(id))

        if (contacto) {
            setListaMensajes(contacto.mensajes)
        }
    }, [id])


    /**
     * Maneja el envío de un nuevo mensaje en el chat.
     *
     * @param {object} e - El objeto de evento desencadenado por el envío del formulario.
     * @return {void}
     */
    const handleSubmit = (e) => {
        e.preventDefault()

        const contactos = JSON.parse(localStorage.getItem('contactos')) || []
        const nuevoMensaje = {
            autor: 'Yo',
            contenido: formMensaje.contenido,
            fecha: formatearFecha(new Date()),
            estado: 'entregado',
            id: uuidv4(),
        }

        const contactoIndex = contactos.findIndex(c => c.id_autor === Number(id))

        if (contactoIndex !== -1) {
            contactos[contactoIndex].mensajes = [...contactos[contactoIndex].mensajes, nuevoMensaje]
            localStorage.setItem('contactos', JSON.stringify(contactos))

            setListaMensajes(contactos[contactoIndex].mensajes)
            setFormMensaje({ contenido: '' })
        }
    }

    return (
        <main className='contenedor-chat'>
            <HeaderChat />
            <ListaMensajes mensajes={listaMensajes} />
            <FooterChat formMensaje={formMensaje} setFormMensaje={setFormMensaje} handleSubmit={handleSubmit} />
        </main>
    )
}

export default Chat