import React from 'react'
import './footer.css'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {Link} from 'react-router-dom'

export const Footer = () => {
    return (
        <React.Fragment>
            <div className="footer">
                <div className="container">
                    <ul className="footer-info">
                        <li>
                            <h4>Ecom Mase</h4>
                            <p>Proyecto desarrollado en el marco del curso de React Js de CoderHouse.</p>
                            <a href="https://github.com/federicoimposti/coderhouse-react/" target="_blank"><p><FaGithub /> El repo</p></a>
                        </li>
                        <li>
                            <h4>Colecciones</h4>
                            <li><Link to={`/category/sfqBbU8qJZiEAmOBekEH`}>Frontend</Link></li>
                            <li><Link to={`/category/FMnv6GZKzC4ZfhYgKLBx`}>Backend</Link></li>
                            <li><Link to={`/category/OJu0PSaNe7QJ9GQ5HxzT`}>Open Source</Link></li>
                            <li><Link to={`/category/mCpBp5UvMKOJKC3zFxEf`}>Geek</Link></li>
                        </li>
                        <li>
                            <h4>Modelos favoritos</h4>
                            <li><Link to={`/item/Kypl4yaBMsWDZCDBAU8T`}>Modelo React 💙</Link></li>
                            <li><Link to={`/item/TSlzyem0NEgb6lPnKCIf`}>Modelo Vue 💚</Link></li>
                            <li><Link to={`/item/Tl96HTh2PXE3KlANiPTO`}>Modelo Ubuntu ⚙</Link></li>
                            <li><Link to={`/item/9cI5qop96YzkurHaq8Nq`}>Modelo Abstract ♨</Link></li>
                        
                        
                        </li>
                        <li>
                            <h4>Contacto</h4>
                            <li><a href="https://www.linkedin.com/in/federico-imposti-3b67b31a2/" target="_blank"><FaLinkedin /> Linkedin</a></li>
                            <li><a href="https://github.com/federicoimposti/coderhouse-react/" target="_blank"><FaGithub /> Github</a></li>
                        </li>
                    </ul>
                </div>
            </div>
        </React.Fragment>
    )
}