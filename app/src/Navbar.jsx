import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './style/Navbar.css'

function Navbar() {
  const [open, setOpen] = useState(false)

  const closeMenu = () => setOpen(false)

  return (
    <nav className="navbar">
      <div className="navbar-logo">EloRankings<span>.</span></div>
      <ul className="navbar-links">
        <li><NavLink to="/" end onClick={closeMenu}>Rankings</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar