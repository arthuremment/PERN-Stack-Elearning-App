import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Flou from '../../Components/Flou/Flou'
import './Forum.css'

const Forum = () => {

    const [currentPage, setCurrentPage] = useState("Forum")
    const navigate = useNavigate();

    //Horodatage
    const date = new Date();
    const année = date.getFullYear();
    const mois = date.getMonth() + 1;
    const jour = date.getDate();
    const heures = date.getHours();
    const minutes = date.getMinutes();

    const [messages, setMessages] = useState([]);

    const getMessages = async () => {
        try {
            const response = await fetch("http://localhost:4000/forum");
            const jsonData = await response.json();

            setMessages(jsonData)
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => {
        getMessages();
    }, [])

    const [message, setMessage] = useState([]);

  
        const handleForum = async e => {
            e.preventDefault();
            if ((message !== null && message !== "")) {
                try {
                    const author = localStorage.getItem('user').slice(1,-1);
                    const date = jour + "/" + mois + "/" + année;
                    const heure = heures + ":" + minutes;

                    const body = { message, author, date, heure }
                    const response = fetch("http://localhost:4000/forum", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(body)
                    });
                    //console.log(response);
                    // Rediriger l'utilisateur vers la page de connexion
                    window.location.reload()
                } catch (error) {
                    console.error(error);
                }
            } else {
                alert("L'espace message est vide !")
            }
        }

    return (
        <>

            <Flou />
            <Navbar currentPage={currentPage}/>

            <main className='forum'>
                <div className='header'>
                    <h1>Forum</h1>
                    <p>Cet espace est reservé aux apprenants pour communiquer avec les enseignants et poser leurs questions. <br />Sentez-vous libre de discuter entre apprenants et de vous entraider mutuellement.</p>
                </div>

                <div className='area'>
                    <div className='messages'>
                        {
                            messages.slice(-5).map((message) => (
                                <article key={message.forum_id} className='message'>
                                    <p className='texte'>{message.message}</p>
                                    <div>
                                        <p className='auteur'> <u>Ecris par :</u> <span>{message.author}</span> </p>
                                        <div className='date'>
                                            <p>{message.date}</p>
                                            <p>{message.heure}</p>
                                        </div>
                                    </div>
                                </article>
                            ))
                        }

                    </div>

                    <form onSubmit={handleForum}>
                        <input
                            type="text"
                            placeholder='Ecris quelque chose :-)'
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                            required
                        />
                        <button type='submit'>Envoyer</button>
                    </form>

                </div>

            </main>

            <Footer />

        </>
    )
}

export default Forum