import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import "./input.css"
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage"
import { UserAuth } from '../../context/AuthContext'
import{ useState } from "react"
import { db, storage } from "../../services/firebase"


// Componente para área de input de IA
const Input = () => {
  const[fileUrl, setFileUrl] = useState("")
  const[validation, setValidation] = useState(false)
  const[progresspercent, setProgresspercent] = useState(0)
  const { user } = UserAuth()

  const handleSubmit = (e) => {
    e.preventDefault()
    const file = e.target[0]?.files[0]
    if (!file) return;
    const storageRef = ref(storage, `files/${user.displayName}/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on("state_changed",
    (snapshot) => {
      const progress =
        Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
      setProgresspercent(progress)
    },
    (error) => {
      alert("Upload failed!")
    },
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        setFileUrl(downloadURL)
        setValidation(true)
      })
    }
    )
  }

  return(
    <div className="input-page">
      <Sidebar/>
      <main className="main-input">
        <section className="input-container">
          <h1 className="main-title">Envie sua IA aqui !</h1>
          <form onSubmit={handleSubmit} className="input-form">
            <input className="ai-input" type="file" id="AI"/>
            <label className="form-label" for="AI">Buscar arquivo</label>
            <button type="submit" className="send-ia">Enviar</button>
            {validation && <span className="sucess-text">Arquivo recebido com sucesso!</span>}
          </form>
        </section>
      </main>
    </div>
  )
}

export default Input