import React from 'react'
import "./footer.css"
import UFV from "../../img/ufv.png"
import brasao from "../../img/brasao.png"

// Componente responsável por renderizar o footer que aparece em todas as páginas
const Footer = () => {

  return(
    <div className="footer">
      <img src={UFV} alt="" className="footer-img" />
      <img src={brasao} alt="" className="footer-img" />
    </div>
  )
}

export default Footer