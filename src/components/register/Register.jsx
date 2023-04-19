import React from 'react'
import "./register.css"
import Header from "../header/Header"
import Footer from "../footer/Footer"
import { useState } from 'react'
import { UserAuth } from '../../context/AuthContext'
import {useNavigate} from "react-router-dom"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../services/firebase"



// Componente para a area de cadastro
const Register = () => {
  const[name, setName] = useState("")
  const[lastname, setLastname] = useState("")
  const[email, setEmail] = useState("")
  const[password, setPassword] = useState("")
  const[error, setError] = useState(false)
  const navigate = useNavigate()
  const { createUser, logout } = UserAuth()

  const handleSubmit = (e) => {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      updateProfile(auth.currentUser, {
        displayName: name+" "+lastname, photoURL: ""
      }).then(() => {
        // Profile updated!
        // ...
      }).catch((error) => {
        setError(true)
        alert(error)
      })
      logout()
    })
    .catch((error) => {
      navigate("/register")
      setError(true)
      alert(error)
    })
    navigate("/login")
  }

  return(
    <div className="register-page">
      <Header/>
      <main className="register-main">
        <section className="register-central">
          <form onSubmit={handleSubmit}className="register-form">
            <input type="name" name="name" id="name" placeholder="Digite seu nome" className="register-input" onChange={e => setName(e.target.value)}/>
            <input type='name' name='lastname' id='lastname' placeholder='Digite seu sobrenome' className='register-input' onChange={e => setLastname(e.target.value)}></input>
            <input type="email" name="email" id="email" placeholder="Digite seu email" className="register-input" onChange={e => setEmail(e.target.value)}/>
            <input type="password" name="password" id="password" placeholder="Crie uma senha" className="register-input" onChange={e => setPassword(e.target.value)}/>
            <button className="register-button"type="submit">Cadastrar-se</button>
            {error && <span>{error}</span>}
          </form>
          <div className="login-link">
            <p className="register-txt">Já possui uma conta?</p>
            <a className="register-login-link" href="/login">Fazer Login</a>
          </div>
        </section>
      </main>
      <footer className="footer-content">
        <Footer/>
      </footer>
    </div>
  )
}

export default Register