import React from 'react'
import "./login.css"
import Header from "../header/Header"
import Footer from "../footer/Footer"
import {useNavigate} from "react-router-dom"
import { useState } from 'react'
import {UserAuth} from "../../context/AuthContext"


// Componente para área de login
const Login = () => {
  const[email, setEmail] = useState("")
  const[password, setPassword] = useState("")
  const[error, setError] = useState(false)
  const navigate = useNavigate()
  const { signIn } = UserAuth();

  async function handleSubmit(e) {
    e.preventDefault()
    try{
      await signIn(email, password)
      navigate("/dashboard")
    }catch(e) {
      setError(true)
    }
  }

  return(
    <div className="login-page">
      <Header/>
      <main className="central">
        <section className="form-content">
          <form onSubmit={handleSubmit} className="form">
            <input className="input" type="email" placeholder="Insira seu email" onChange={e => setEmail(e.target.value)} />
            <input className="input" type="password" placeholder="Insira sua senha" onChange={e => setPassword(e.target.value)} />
            <button className="login-button" type="submit">Login</button>
            {error && <span>Dados incorretos!</span>}

            <div className="register-link">
              <a href="/recovery" className="register-tag">Esqueci minha senha!</a>
            </div>
            <div className="register-link">
              <p className="bot-login-txt">Ainda não possui uma conta?</p>
              <a href="/register" className="register-tag">Cadastre-se</a>
            </div>
          </form>
        </section>
      </main>
      <footer className="footer-content">
        <Footer/>
      </footer>
    </div>
  )
}

export default Login