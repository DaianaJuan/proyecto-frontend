import React, { useRef } from 'react'
import Mensajes from '../Mensajes/Mensajes'
import { v4 as uuidv4 } from 'uuid';
import './ListaMensajes.css'

const ListaMensajes = ({mensajes}) => {

    const chatContainerRef = useRef(null);

  useEffect(() => {
    // Desplazar al final cuando el componente se renderiza o cuando se actualizan los mensajes
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [/* Dependencias que puedan causar una actualización, e.g., mensajes */]);
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