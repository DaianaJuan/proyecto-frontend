import React, { useState } from 'react'
import ListaContactos from '../../Componentes/ListaContactos/ListaContactos'
import HeaderHomeContactos from '../../Componentes/HeaderHomeContactos/HeaderHomeContactos'
import FooterHomeContactos from '../../Componentes/FooterHomeContactos/FooterHomeContactos'
import './HomeContactos.css'
import { contactos } from '../../data/contactosData'

/**
 * Un componente funcional que renderiza la página de inicio de contactos.
 *
 * @return {JSX.Element} El elemento JSX que representa la página de inicio de contactos.
 */
const HomeContactos = () => {

    const [search, setSearch] = useState('');

    /**
     * Actualiza el estado de búsqueda con el nuevo valor ingresado.
     *
     * @param {string} value - El nuevo valor de búsqueda.
     * @return {void}
     */
    const handleSearchChange = (value) => {
        setSearch(value);
    }

    return (
        <>
            <HeaderHomeContactos search={search} onSearchChange={handleSearchChange} />
            <ListaContactos contactos={contactos} search={search} />
            <FooterHomeContactos />
        </>
    )
}

export default HomeContactos