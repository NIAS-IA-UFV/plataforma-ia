import React from 'react'
import "./dashboard.css"
import { UserAuth } from '../../context/AuthContext';
import Sidebar from "../sidebar/Sidebar.jsx"
import { useNavigate } from 'react-router-dom'

// Componente responsável por renderizar o dashboard
const Dashboard = () => {
  const { user } = UserAuth()
  const navigate = useNavigate();
  
  
  function handleName() {
    return user.displayName
  }

  function handleClick() {
    navigate("/competition")
  }

  return(
    <div className="dashboard">
      <Sidebar/>
      <div className="home-container">
        <header className="profile-header">
          <h1 className="profile-title">Olá {user && handleName()}, bem-vindo à competição de Poker ! </h1>
          <div className="presentation-container">
            <p className="presentation">
              Esta competição tem como objetivo criar uma inteligência artificial capaz de jogar poker
              em um ambiente virtual que simula a mesa e a distribuição de cartas. O ambiente aqui descrito foi desenvolvido por Josias Paoli Reis como parte de seu trabalho de conclusão do curso de Engenharia Elétrica da Universidade Federal de Viçosa (UFV) em dezembro de 2017. O autor pode ser contatado a partir do email josiaspaoli@gmail.com.
              O DEnTS (Dynamic Environment for Texas hold'em poker Systems) é um ambiente no limits texas hold'em poker feito em Matlab que possibilita o desenvolvimento de IAs nessa plataforma, possibilitando que diferentes IAs batalhem entre si ou que um jogador humano jogue contra diversas IAs, inclusive com a possibilidade de armazenamento de um log com as ações e as variáveis em cada uma das ações. O programa é baseado no OOPoker, criado por Lode Vandevenne, hospedado em <a href="https://github.com/lvandeve/oopoker" target="_blank" className="oopoker-link">https://github.com/lvandeve/oopoker</a>.
            </p>
          </div>
          <button onClick={handleClick} className="participate-button">Participar</button>
        </header>
      </div>
    </div>
  )
}

export default Dashboard