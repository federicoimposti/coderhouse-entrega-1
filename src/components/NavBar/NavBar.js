import React from 'react'
import './navbar.css'
import logo from '../../assets/img/logo.png';

export const NavBar = () => {
    return (
        <div className='header'>
            <div className='containerNav'>
                <div className='logo'>
                    <img src={logo} className="logo" alt="logo" />
                </div>
                <nav className='menuMain'>
                    <a href="/">Home</a>
                    <a href="/">Colecciones</a>
                    <a href="/">Modelos</a>
                    <a href="/">Preguntas frecuentes</a>
                    <a href="/">Contacto</a>
                </nav>
            </div>
        </div>
    )
}