import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hook/useAuth'
import logo from '../../assets/Images/FullLogo.png'
import './Navbar.css'

const Navbar = ({ currentPage }) => {

  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    // Rediriger l'utilisateur vers la page de connexion
    navigate("/");
  };

  var username = localStorage.getItem('user').slice(1,-1);

  return (
    <nav className='nav'>
      <div className='navbar'>
        <div className='log'>
          <img src={logo} alt="logo" />
          <p> <span className="span">{username.toUpperCase() !== "UL" && ">"}</span> {username.toUpperCase() !== "UL" && username.toUpperCase()}</p>
        </div>

        <div className='links'>
          <ul>
            <li onClick={() => { navigate("/") }}>Accueil</li>
            <li style={{ color: currentPage === 'Courses' && '#5892d5'}} onClick={() => { navigate("/Courses") }}>Cours</li>
            <li style={{ color: currentPage === 'Quizz' && '#5892d5'}} onClick={() => { navigate("/Quizz") }}>Quizz</li>
            <li style={{ color: currentPage === 'Forum' && '#5892d5'}} onClick={() => { navigate("/Forum") }}>Forum</li>
            <li onClick={() => { navigate("/") }}>A propos</li>
            <li onClick={() => { navigate("/") }}>Contactez-nous</li>
          </ul>
          {username !== "ul" ? <button type='button' className='navbtn' onClick={handleLogout}>Déconnexion</button> : <button type='button' className='navbtn' onClick={() => { navigate("/Login") }}>Connexion</button>}
        </div>
      </div>

    </nav>
  )
}

export default Navbar