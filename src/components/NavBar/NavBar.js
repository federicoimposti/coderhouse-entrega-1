import React from 'react'
import './navbar.css'
import logo from '../../logo.svg';

export const NavBar = () => {
    return (
        <div className='containerNav'>
            <div className='logo'>
                <img src={logo} className="App-logo" alt="logo" />
            </div>
            <nav className='menuMain'>
                <p>Home</p>
                <p>Categorías</p>
                <p>Carrito</p>
            </nav>
        </div>
    )
}