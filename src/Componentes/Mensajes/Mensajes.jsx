import React from 'react'
import { BsCheck2All } from "react-icons/bs";
import './Mensajes.css'
//uso la libreria React Icons ('https://react-icons.github.io/react-icons/')

const Mensajes = ({ mensaje: { autor, contenido, estado, fecha } }) => {

/**
 * Renderiza un componente de mensaje con el objeto de mensaje dado.
 *
 * @param {Object} mensaje - El objeto de mensaje que contiene el autor, contenido, estado y fecha.
 * @param {string} mensaje.autor - El autor del mensaje.
 * @param {string} mensaje.contenido - El contenido del mensaje.
 * @param {string} mensaje.estado - El estado del mensaje.
 * @param {string} mensaje.fecha - La fecha del mensaje.
 * @return {JSX.Element} El componente de mensaje renderizado.
 * 
 * Contiene condiciones para la aplicacion de estilos según el estado del mensaje y el autor.
 * Si el autor es 'Yo', mis contenedores de mensajes se posicionan del lado derecho por ej.
 */


    return (
        <div>

            <>
                <div className='contenedor-mensaje'>

                    {
                        autor === 'Yo'

                            ? <div className='mensaje-yo'>
                                <p className='autor'><strong>{autor}</strong></p>
                                <p className='texto'>{contenido}</p>

                                <div className='contenedor-estado'>
                                    <span className='fecha'>{fecha}</span>

                                    {
                                        estado === 'visto'

                                            ? <span className='estadoVisto'><BsCheck2All /></span>
                                            : <span className='estadoNoVisto'><BsCheck2All /></span>
                                    }

                                </div>
                            </div>
                            : <div className='contenedor-mensaje-otro'>

                                <p className='autor'><strong>{autor}</strong></p>
                                <p className='texto'>{contenido}</p>

                                <div className='contenedor-estado'>
                                    <span className='fecha'>{fecha}</span>

                                    {
                                        estado === 'visto'

                                            ? <span className='estadoVisto'><BsCheck2All /></span>
                                            : <span className='estadoNoVisto'><BsCheck2All /></span>
                                    }
                                </div>
                            </div>

                    }
                </div>
            </>

        </div>
    )
}

export default Mensajes