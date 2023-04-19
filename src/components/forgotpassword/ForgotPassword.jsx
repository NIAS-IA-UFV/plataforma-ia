import React from "react"
import "./forgotpassword.css"
import Footer from "../footer/Footer"
import Header from "../header/Header"
import {useState} from "react"
import {useNavigate} from "react-router-dom"
import {UserAuth} from "../../context/AuthContext"

// Componente para renderizar a pagina de troca de senha
const ForgotPassword = () => {
  const[email, setEmail] = useState("")
  const[validation, setValidation] = useState(false)
  const navigate = useNavigate()
  const { resetPassword } = UserAuth()

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      resetPassword(email)
      setValidation(true)
    }catch(error){
      alert(error)
    }
  }

  return(
    <div className="login-page">
      <Header/>
      <main className="central">
        <section className="forgot-form-content">
          <form onSubmit={handleSubmit} className="form">
            <input className="input" type="email" id="email" placeholder="Digite seu email" name="email" onChange={e => setEmail(e.target.value) }/>
            <button className="login-button" type="submit">Resetar Senha</button>
            {validation && <span className="sucess-text">Email enviado, não esqueça de verificar a caixa de spam!</span>}
          </form>
        </section>
      </main>
      <footer className="footer-content">
        <Footer/>
      </footer>
    </div>
  )
}

export default ForgotPassword