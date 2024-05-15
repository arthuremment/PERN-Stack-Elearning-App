import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'
import Splash from '../../Components/Splash/Splash'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import logo from '../../assets/Images/FullLogo.png'
import img1 from '../../assets/Images/img1.png'
import img2 from '../../assets/Images/img2.png'
import img3 from '../../assets/Images/img3.png'
import img4 from '../../assets/Images/img4.png'
import star from '../../assets/Images/star.svg'
import Aos from 'aos';
import 'aos/dist/aos.css';
import './Home.css'

const Home = () => {

  const redirect = useNavigate();

  useEffect(() => {
    Aos.init({ duration: 1500 });
    window.scrollTo(0, 0);
  }, []);

  const settings = {
    arrows: true,
    dots: false,
    // dotsClass: 'slick-dots custom-dots',
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,

    // eslint-disable-next-line
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: false,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };



  return (
    <>

      <header data-aos="fade-down">

        <nav>
          <div className='logo'>
            <img src={logo} alt="logo" />
          </div>
          <div className='links'>
            <ul>
              <li onClick={() => { redirect("/") }}>Acceuil</li>
              <li onClick={() => { redirect("/Courses") }}>Cours</li>
              <li onClick={() => { redirect("/Quizz") }}>Quizz</li>
              <li onClick={() => { redirect("/Forum") }}>Forum</li>
              <li><a href="#apropos">A propos</a></li>
              <li><a href="#contactus">Contactez-nous</a></li>
              <button type='button' onClick={() => { redirect("/Login") }}>Commencez</button>
            </ul>
          </div>
        </nav>

        <div className='landing'>
          <h1 >Découvrez une nouvelle facon dynamique et immersive de <span>Skull</span> l'anglais avec notre plateforme interactive et engageante <span className='exclam'>!</span></h1>
          <div className='buttons'>
            <button type='button' onClick={() => { redirect("/Login") }} className='Login'>Se connecter</button>
            <button type='button' onClick={() => { redirect("/SignUp") }} className='Signup'>S'inscrire</button>
          </div>
        </div>

      </header>

      <main>

        <section data-aos="fade-up" data-aos-offset="50" className='one'>

          <div className='facts'>
            <div>
              <h3>10,000+</h3>
              <p>Apprenants formés à travers le monde depuis trois ans</p>
            </div>
            <div>
              <h3>4.5/5</h3>
              <p>Note que nous attribuent les étudiants et les enseignants</p>
            </div>
            <div>
              <h3>50+</h3>
              <p>Lecons d'anglais détaillés, avec exercices et quizz</p>
            </div>
          </div>

          <Splash top='750px' left='200px' width='100px' />

          <img data-aos="zoom-in" src={img1} alt="background" className='img1' />
        </section>

        <section data-aos="fade-up" className='two' id='apropos'>

          <h1>Découvre la meilleure facon d'apprendre l'anglais</h1>

          <article data-aos="fade-up">
            <h2>Cours d'anglais complet</h2>
            <p>Apprends à parler anglais rapidement avec nos cours complet d'anglais; Accessibles à tous, nos cours d'anglais en ligne te permettront de parler couramment en partant de tout niveau grace à nos lecons de prononciation, grammaire et expressions.</p>
          </article>

          <article data-aos="fade-up" data-aos-offset="200">
            <h2>Anglais pour les voyages</h2>
            <p>Nos cours d'anglais pour les voyages seront utiles lors d'un séjour en pays anglophone. Les leocons t'apporteront le vocabulaire et les formules simples pour apprendre les bases en anglais et profiter de tes voyages à l'etranger. tu sauras facilement demander ton chemin ou passer une commande.</p>
          </article>

          <img data-aos="zoom-in" data-aos-offset="300" src={img2} alt="img2" />

          <Splash top='1750px' left='850px' width='150px' />

        </section>

        <section data-aos="fade-up" className='three'>

          <h1>En quoi <span>SKULL</span> est different ?</h1>

          <article data-aos="fade-up" data-aos-offset="200">
            <h2>Progresse plus rapidement avec ton plan d'études</h2>
            <p>Tu as du mal à t'organiser ? On est là pour t'aider ! Crée ton plan d'études en précisant quand tu souhaites étudier, et combien de temps tu comptes accorder à tes révisions. Nous t'enverrons ensuites des mails et le suivi de tes progrés afin de garder le cap.</p>
          </article>

          <article data-aos="fade-up" data-aos-offset="250">
            <h2>Entraine-toi à parler et lire en anglais avec des locuteurs natifs et du contenu pratique</h2>
            <p>Perfectionne tes conversations en anglais grace au forum de SKULL et aux commentaires de plus de 120 millions de locuteurs natifs. Progresse rapidement avec nos lecons en ligne axées sur la vie courante.</p>
          </article>

          <img data-aos="zoom-in" data-aos-offset="350" src={img3} alt="img3" width={400} />

          <Splash top='1300px' left='450px' width='150px' />

        </section>

        <section data-aos="fade-up" data-aos-offset="350" className='four'>

          <h1>Voici ce que les autres utilisateurs aiment chez <text>SKULL</text> </h1>
          <h3 data-aos="fade-up" data-aos-offset="200">Nos 120 millions d'utilisateurs apprennent tous ensemble. Voici ce que certains disent de nous...</h3>

          <Slider {...settings} className='slider'>

            <div className='comments'>
              <div className='star'>
                {Array(4).fill().map((_, index) => (
                  <img src={star} alt="star" width={40} key={index} />
                ))}
                <p>4/5</p>
              </div>

              <p>On m'a répondu rapidement et mon problème a été vite résolu!</p>
              <p><span>Tracy Nagels</span>, 22 mars</p>
            </div>

            <div className='comments'>
              <div className='star'>
                {Array(4).fill().map((_, index) => (
                  <img src={star} alt="star" width={40} key={index} />
                ))}
                <p>4/5</p>
              </div>
              <p>Mon niveau en anglais s'est nettement amélioré grace aux cours que j'ai suivi sur le site.</p>
              <p><span>Paul Duschamps</span>, 01 janvier</p>
            </div>

            <div className='comments'>
              <div className='star'>
                {Array(5).fill().map((_, index) => (
                  <img src={star} alt="star" width={40} key={index} />
                ))}
                <p>5/5</p>
              </div>
              <p>Waouhh... I can't believe i'm perfectly bilingual now :)</p>
              <p><span>Ramy Papousy</span>, 14 février</p>
            </div>

          </Slider>

        </section>

        <section className='five' id='contactus'>

          <div data-aos="fade-up" data-aos-offset="250">
            <p>Abonnez-vous à notre newsletter</p>
            <button type='button'>S'abonner</button>
          </div>

          <img data-aos="zoom-in" data-aos-offset="300" src={img4} alt="img4" />

          <article data-aos="flip-left" data-aos-offset="200">
            <button onClick={() => { localStorage.getItem('user') ? redirect("/Courses") : redirect("/Login") }} type='button' className='start'>Commencer à SKULL l'anglais gratuitement</button>
          </article>

        </section>


      </main>

      <Footer />

    </>
  )
}

export default Home