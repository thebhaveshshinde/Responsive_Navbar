import { NavLink } from "react-router-dom"
import "../Style.css"
import { useState } from "react"

function Nav() {
    const [isopen , setisopen]=useState(false)

    const handle_logo_click = () => {
        setisopen(!isopen)
    }

    const handle = () =>{
        setisopen(false)
    }
  return (
    <>
      <nav className="navbar">
        <ul className={`nav-links ${isopen?'open' : ''}`}>
            <NavLink onClick={handle} activeclassname="active" to={"/"}>Home</NavLink>
            <NavLink onClick={handle} activeclassname="active" to={"/about"}>About</NavLink>
            <NavLink onClick={handle} activeclassname="active" to={"/blogs"}>Blogs</NavLink>
        </ul>
        <div className="hambergur_logo_container">
             <img src="/download.png" alt="Hambergur Logo Pic " onClick={handle_logo_click} />
        </div>
      </nav>
    </>
  )
}

export default Nav
