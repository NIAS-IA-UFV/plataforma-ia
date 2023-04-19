import React from "react"
import "./home.css"
import Header from "../header/Header"
import IA from "../../img/IA.png"
import UFV from "../../img/ufv.png"
import brasao from "../../img/brasao.png"
import Footer from "../footer/Footer"
import {useNavigate} from "react-router-dom"


// Componente para renderizar a pagina home
const Home = () => {
  const navigate = useNavigate()

  function handleClick() {
    navigate("/register")
  }

  return(
    <div className="homepage">
      <Header/>
      <main className="main-content">
        <section className="central-content">
          <div className="central-txt">
            <h1 className="central-title">Plataforma NIAS-IA</h1>
            <h2 className="central-subtitle">
              A plataforma de competições de IA<br/>da Universidade Federal de Viçosa
            </h2>
            <button onClick={handleClick} className="main-button">
              Cadastre-se
            </button>
          </div>
          <img src={IA} alt="" className="central-img" />
        </section>
        <section className="bot-content">
          <h3 className="bot-title">
            Mostre-nos sua melhor IA
          </h3>
          <p className="bot-txt">
            Implemente seus modelos e divirta-se participando de nossas <em><a>competições</a>!</em>
          </p>
        </section>
      </main>
      <footer className="footer-content">
        <Footer/>
      </footer>
    </div>
  )

}

export default Home