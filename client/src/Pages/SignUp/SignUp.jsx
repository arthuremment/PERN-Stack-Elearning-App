import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
//import axios from 'axios';
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Flou from '../../Components/Flou/Flou'
import logo from '../../assets/Images/FullLogo.png'
import img5 from '../../assets/Images/img5.png'
import './SignUp.css'

const SignUp = () => {

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  

  const handleRegistration = async e => {
    e.preventDefault();
    if ((username !== null && username !== "") && (password !== null && password !== "")) {
      try {
        const body = { username, password }
        const response = await fetch("http://localhost:4000/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        });
        //console.log(response);
        // Rediriger l'utilisateur vers la page de connexion
        navigate("/Login");
      } catch (error) {
        console.error(error);
      }
    } else {  
      alert('Veillez remplir vos informations convenablement !')
    }
  };

  console.log('nom:', username, 'mot de passe:', password)

  return (
    <main>

      <Flou />
      <Navbar />

      <section className='signup'>
        <h1>Inscription</h1>
        <div className='board'>
          <div>
            <img src={img5} alt="img5" />
          </div>
          <div className='form'>
            <img src={logo} alt="logo" />
            <form onSubmit={handleRegistration}>
              <input
                type="text"
                placeholder='Nom'
                value={username}
                onChange={e => setUsername(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder='Mot de passe'
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
              <Link to="/Login" className='link'>J'ai déja un compte</Link>
              <button type='submit'>S'inscrire</button>
            </form>
          </div>
          <div>
            <img src={img5} alt="img5" />
          </div>

        </div>

      </section>

      <Footer />

    </main>
  )
}

export default SignUp