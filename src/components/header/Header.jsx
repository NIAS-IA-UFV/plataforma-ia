import React from "react"
import "./header.css"
import nias from "../../img/nias.png"
import brasao from "../../img/brasao.png"
import IA from "../../img/IA.png"
import ufv from "../../img/ufv.png"
import {NavLink} from "react-router-dom"

// Componente para renderizar o header principal
const Header = () => {

  return(
    <div className="header-content">
      <header className="header">
     
        <NavLink to="/">
          <img src={nias} alt="" className="header-img" />
        </NavLink>
   
        
        <nav className="header-menu">
          <a href="/login" className="header-menu-item">Login</a>
          <a href="" className="header-menu-item">Competições</a>
          <a href="" className="header-menu-item">Tutorial</a>
          <a href="" className="header-menu-item">Contato</a>
        </nav>
      </header>
    </div>
  )
}

export default Header