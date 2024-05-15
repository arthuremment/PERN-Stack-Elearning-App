import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hook/useAuth';
import axios from 'axios';
import Splash from '../../Components/Splash/Splash'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Flou from '../../Components/Flou/Flou'
import logo from '../../assets/Images/FullLogo.png'
import './Login.css'

const Login = ( ) => {

  const { login } = useAuth();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/login', {
        username,
        password,
      }); 
      await login(username);

      console.log(response.data)
      // let token = response.data.token
      // let user = username
      // login(token, user)
      
      // Rediriger l'utilisateur vers la page des cours
      navigate("/Courses");

    } catch (error) {
      console.error(error);
    }
  };


  return (
    <main>

      <Flou />
      <Navbar />

      <section className='login'>
        <h1>Connexion</h1>
        <div className='form'>
          <img src={logo} alt="logo" />
          <form onSubmit={handleLogin}>
            <input 
              type="text" 
              placeholder='Nom' 
              value={username} 
              onChange={e => setUsername(e.target.value)} />
            <input 
              type="password" 
              placeholder='Mot de passe' 
              value={password} 
              onChange={e => setPassword(e.target.value)} />
            <div className='links'>
              <Link to="/SignUp" className='link'>Créer un compte</Link>
              <Link to="/SignUp" className='link'>Mot de passe oublié</Link>
            </div>
            <button type="submit">Se connecter</button>
          </form>
        </div>
        <Splash top='250px' left='200px' width='100px' />
        <Splash top='450px' left='1200px' width='150px' />
      </section>

      <Footer />

    </main>
  )
}

export default Login