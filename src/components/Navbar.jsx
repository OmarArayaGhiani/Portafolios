//dependencies
import {NavLink} from "react-router-dom"
import {useState} from "react"

//css
import "../css/navbar.css"

const NavBar = () => {
  const setActiveClass = ({isActive}) => (isActive ? "active" : undefined)
  const [hiddenMenu, setHiddenMenu] = useState("hidden-menu")
  const [hiddenButton, setHiddenButton] = useState("no-hidden-button")

  const changeClass = () => {
    if (hiddenMenu == "hidden-menu") {
      setHiddenMenu("no-hidden-menu")
      setHiddenButton("hidden-button")
    }
    if (hiddenMenu == "no-hidden-menu") {
      setHiddenMenu("hidden-menu")
    }
  }

  const closeMenu = () => {
    if (hiddenMenu == "no-hidden-menu") {
      setHiddenMenu("hidden-menu")
      setHiddenButton("no-hidden-button")
    }
  }

  return (
    <div className="navbar">
      <NavLink to="/home" className={`${setActiveClass}`}>
        <h1 onClick={closeMenu}>Sergio Araya Ghiani</h1>
      </NavLink>
      <div className="d-flex">
        <div className={`${hiddenMenu}`}>
          <button className="menu-close" onClick={closeMenu}>
            X
          </button>
          <NavLink
            to="/about"
            className={`${setActiveClass} link`}
            onClick={closeMenu}
          >
            Sobre mí
          </NavLink>
          <NavLink
            to="/proyects"
            className={`${setActiveClass} link`}
            onClick={closeMenu}
          >
            Proyectos
          </NavLink>
          <NavLink
            to="/contact"
            className={`${setActiveClass} link`}
            onClick={closeMenu}
          >
            Contácto
          </NavLink>
        </div>
        <button className={`${hiddenButton}`} onClick={changeClass}>
          ☰
        </button>
      </div>
    </div>
  )
}

export default NavBar
