import React from 'react'
import {CartWidget} from './CartWidget'
import './navbar.css'
import logo from '../../assets/img/logo.png';
import {Link} from 'react-router-dom'

export const NavBar = () => {
    return (
        <div className='header'>
            <div className='containerNav'>
                <div className='logo'>
                <li><Link to={`/`}><img src={logo} className="logo" alt="logo" /></Link></li>
                </div>
                <nav className='menuMain'>
                    <li><Link to={`/`}>Home</Link></li>
                    <li><Link to={`/category/geek`}>Colección Geek</Link></li>
                    <li><Link to={`/category/opensource`}>Colección Open Source</Link></li>
                    <li><Link to={`/item/1`}>Modelo React 💙</Link></li>
                    <li>Preguntas frecuentes</li>
                    <li>Contacto</li>
                </nav>
                <CartWidget />
            </div>
        </div>
    )
}