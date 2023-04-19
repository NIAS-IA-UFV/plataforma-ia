import "./sidebar.css"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import DensityMediumOutlinedIcon from '@mui/icons-material/DensityMediumOutlined';
import { UserAuth } from '../../context/AuthContext';
import {useNavigate} from "react-router-dom"


// Componente para a barra lateral de icones
const Sidebar = () => {
  const { logout } = UserAuth()
  const navigate = useNavigate()

  function handleLogout() {
    logout()
    navigate("/")

  }


  return(
    <div className="sidebar">
      <div className="top">
        <div className="bar-control"><button className="control-button"><DensityMediumOutlinedIcon className="top-icon"/></button></div>
        <a href="/dashboard" className="logo">NIAS-IA</a>
      </div>
      <div className="center">
        <ul className="items">
          <p className="title">PRINCIPAL</p>
          <li className="item-icon">
            <HomeOutlinedIcon className="icon"/>
            <a href="/dashboard" className="sidebar-item">Home</a>
          </li>
          <li className="item-icon">
            <EmojiEventsOutlinedIcon className="icon"/>
            <a href="/competition" className="sidebar-item">Competição</a>
          </li>
          <p className="title">UTIL</p>
          <li className="item-icon">
            <CommentOutlinedIcon className="icon"/>
            <a className="sidebar-item">Fórum</a>
          </li>
          <li className="item-icon">
            <SchoolOutlinedIcon className="icon"/>
            <a className="sidebar-item">Cursos</a>
          </li>
        </ul>
      </div>
      <div className="bot">
        <ul className="items">
          <p className="title">USUARIO</p>
          <li className="item-icon">
            <SettingsOutlinedIcon className="icon"/>
            <a className="sidebar-item">Configurações</a>
          </li>
          <li className="item-icon">
            <AssignmentIndOutlinedIcon className="icon"/>
            <a className="sidebar-item">Perfil</a>
          </li>
          <li className="item-icon">
            <ExitToAppOutlinedIcon className="icon"/>
            <a onClick={handleLogout} className="sidebar-item">Sair</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar