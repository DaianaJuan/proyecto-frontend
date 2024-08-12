import React from 'react'
import './FooterHomeContactos.css'
import { BsChatSquareTextFill } from "react-icons/bs";
import { FaGalacticRepublic } from "react-icons/fa";
import { MdOutlinePhone } from "react-icons/md";
import { FaRebel } from "react-icons/fa";
import { Link } from 'react-router-dom';


/**
 * Un componente funcional que renderiza un pie de página de la página de inicio de contactos.
 *
 * @return {JSX.Element} El elemento JSX que representa el pie de página de la página de inicio de contactos.
 */
const FooterHomeContactos = () => {

    return (
        <footer className='footer-home'>
            <div className='contenedor-botones'>
                <button><BsChatSquareTextFill /><br />Chats</button>
                <button><FaGalacticRepublic /><br />República</button>
                <button><FaRebel /><br />Rebeldes</button>
                <button><MdOutlinePhone /><br />Llamadas</button>
            </div>
        </footer>
    )
}

export default FooterHomeContactos