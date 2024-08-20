import React from 'react'
import Mensajes from '../Mensajes/Mensajes'
import { v4 as uuidv4 } from 'uuid';
import './ListaMensajes.css'

const ListaMensajes = ({mensajes}) => {

    
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
        </section>
    )
}

export default ListaMensajes