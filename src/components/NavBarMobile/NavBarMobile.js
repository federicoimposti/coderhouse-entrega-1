import React from "react";
import './navbarmobile.css'
import { stack as Menu } from "react-burger-menu";
import {Link} from 'react-router-dom'

export const NavBarMobile = props => {
  return (
    // Pass on our props
    <Menu {...props}>
      <li className="menu-item"><Link to={`/`}>Home</Link></li>
      <li className="menu-item"><Link to={`/category/geek`}>Colección Geek</Link></li>
      <li className="menu-item"><Link to={`/category/opensource`}>Colección Open Source</Link></li>
      <li className="menu-item"><Link to={`/item/1`}>Modelo React 💙</Link></li>
      <li className="menu-item">Preguntas frecuentes</li>
      <li className="menu-item">Contacto</li>
    </Menu>
  );
};
