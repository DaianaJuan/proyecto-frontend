import React, { useEffect, useState } from 'react'
import Contactos from '../Contactos/Contactos'
import './ListaContactos.css'
import { obtenerContactoPorId, obtenerContactos } from '../../helpers/contactos';
import { useParams } from 'react-router-dom';

/**
 * Un componente funcional que muestra una lista de contactos.
 *
 * @param {object} contactos - La lista de contactos a mostrar.
 * @param {string} search - La consulta de búsqueda para filtrar los contactos.
 * @return {JSX.Element} El elemento JSX que representa la lista de contactos.
 */
const ListaContactos = ({ contactos, search }) => {
    const [contactosFiltrados, setContactosFiltrados] = useState(contactos);

    const { id } = useParams();
    const contacto = obtenerContactoPorId(id);

    useEffect(() => {
        if (search) {
            setContactosFiltrados(
                contactos.filter((contacto) =>
                    contacto.nombre?.toLowerCase().includes(search.toLowerCase())
                )
            );
        } else {
            setContactosFiltrados(contactos);
        }
    }, [contactos, search]);

    return (
        <main className='cont-contactos'>
            {
                contactosFiltrados.map((contacto) => {
                    return (
                        <Contactos contacto={contacto} key={contacto.id_autor} />
                    )
                })
            }
        </main>
    )
}

export default ListaContactos