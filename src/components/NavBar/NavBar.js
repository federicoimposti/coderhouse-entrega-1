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
                    <li className="desplegable">Colecciones ▾
                        <ul>
                            <li><Link to={`/category/sfqBbU8qJZiEAmOBekEH`}>Frontend</Link></li>
                            <li><Link to={`/category/FMnv6GZKzC4ZfhYgKLBx`}>Backend</Link></li>
                            <li><Link to={`/category/OJu0PSaNe7QJ9GQ5HxzT`}>Open Source</Link></li>
                            <li><Link to={`/category/mCpBp5UvMKOJKC3zFxEf`}>Geek</Link></li>
                        </ul>
                    </li>
                    <li><Link to={`/item/Kypl4yaBMsWDZCDBAU8T`}>Modelo React 💙</Link></li>
                    <li><Link to={`/item/TSlzyem0NEgb6lPnKCIf`}>Modelo Vue 💚</Link></li>
                </nav>
                <CartWidget />
            </div>
        </div>
    )
}