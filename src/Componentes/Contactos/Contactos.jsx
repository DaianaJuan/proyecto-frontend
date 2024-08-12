import React from 'react'
import { Link } from 'react-router-dom'
import './Contactos.css'

const Contactos = ({ contacto }) => {


    //desestructurando contacto para acceder a sus propiedades y poder llamarlas.

    const {
        nombre,
        thumbnail,
        ultima_conexion,
        id_autor,
        mensajes,
    } = contacto

    //englobo el componente en un Link para poder redireccionar a la ruta del chat. Entonces, cuando el usuario haga
    //click en alguna propiedad de dicho contacto, lo llevará al chat de ese contacto en particular.

    const ultimoMensaje = mensajes.at(-1) //busco el ultimo mensaje del contacto usando el metodo .at() en arrays.

    return (
        <section className='cont-contacto'>
            <Link to={'/chat/' + id_autor} className='contacto-link'>
                <div className='cont-img'>
                    <img src={thumbnail} />
                </div>
                <div className='flex-info-contacto'>
                    <div className='info-contacto'>
                        <h2 className='nombre-contacto'>{nombre}</h2>
                        <span className='ultima-conexion'>{ultima_conexion}</span>
                    </div>
                    <span className='ultimo-mensaje'>{ultimoMensaje.contenido}</span>
                </div>
            </Link>
        </section>
    )
}

export default Contactos

