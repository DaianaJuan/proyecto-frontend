import React, { useEffect, useRef } from 'react'
import Mensajes from '../Mensajes/Mensajes'
import { v4 as uuidv4 } from 'uuid';
import './ListaMensajes.css'

const ListaMensajes = ({mensajes}) => {

    //Lógica para desplazar al final del contenedor cuando los mensajes cambian, se envía un mensaje nuevo
    const mensajesEndRef = useRef(null);

    useEffect(() => {
        // Desplazar al final del contenedor cada vez que los mensajes cambian
        if (mensajesEndRef.current) {
            mensajesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [mensajes]);
/**
 * Renderiza una lista de mensajes.
 *
 * @param {Array} mensajes - Un arreglo de objetos de mensaje.
 * @return {JSX.Element} Un elemento de sección conteniendo un div para cada mensaje.
 */
    return (
        <section className='contenedor-lista-mensajes'>
            {
                mensajes.map((mensaje) => {
                    return (
                        <div key={uuidv4()}>
                            <Mensajes mensaje={mensaje} />
                        </div>
                    )
                }
                )}
                <div ref={mensajesEndRef} />
        </section>
    )
}

export default ListaMensajes