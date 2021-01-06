import React from "react";
import './navbarmobile.css'
import { stack as Menu } from "react-burger-menu";

export const NavBarMobile = props => {
  return (
    // Pass on our props
    <Menu {...props}>
      <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="/">
        Colecciones
      </a>

      <a className="menu-item" href="/">
        Modelos
      </a>

      <a className="menu-item" href="/">
        Preguntas frecuentes
      </a>

      <a className="menu-item" href="/">
        Contacto
      </a>
    </Menu>
  );
};
