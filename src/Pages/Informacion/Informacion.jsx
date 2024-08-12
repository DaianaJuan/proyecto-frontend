import React from 'react'
import InformacionContacto from '../../Componentes/InformacionContacto/InformacionContacto'
import HeaderInformacionContacto from '../../Componentes/HeaderInformacionContacto/HeaderInformacionContacto'

/**
 * Un componente funcional que renderiza la página de información.
 *
 * @return {JSX.Element} El elemento JSX que representa la página de información.
 */

const Informacion = () => {

    return (
        <>
            <HeaderInformacionContacto/>
            <InformacionContacto/>
        </>
    )
}

export default Informacion