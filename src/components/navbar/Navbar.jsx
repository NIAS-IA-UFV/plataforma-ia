import "./navbar.css"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';


// Componente para implementar uma barra de navegação (implementação futura)
const Navbar = () => {
  return(
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <SearchOutlinedIcon className="search-icon"/>
          <input className="search-bar" type="text" placeholder="Pesquisar"/>
        </div>
      </div>
    </div>
  )
}

export default Navbar;