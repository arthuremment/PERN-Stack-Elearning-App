import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Confetti from 'react-confetti'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Flou from '../../Components/Flou/Flou'
import Splash from '../../Components/Splash/Splash'
import './Quizz.css'

const Quizz = () => {

    const params = useParams()

    const [allQuizz, setAllQuizz] = useState([]);

    const getQuizz = async () => {
        try {
            const response = await fetch("http://localhost:4000/quizz/" + params.id);
            const jsonData = await response.json();

            setAllQuizz(jsonData)
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => {
        getQuizz();
    }, [])

    const [quizz, setQuizz] = useState({})

    const [selectedAnswers, setSelectedAnswers] = useState(Array(quizz.length).fill(""))

    const [showAnswers, setShowAnswers] = useState(false)

    const handleAnswer = (answer, index) => {
        const newSelectedAnswers = [...selectedAnswers];
        newSelectedAnswers[index] = answer;

        setSelectedAnswers(newSelectedAnswers)
    }

    const handleShowAnswers = () => {
        setShowAnswers(true)
    }

    let correctAnswers = []
   
    let score = []
    for (let i = 0; i < selectedAnswers.length; i++) {
        for (let j = 0; j < correctAnswers.length; j++) {
            if (selectedAnswers[i] === correctAnswers[j]) {
                score.push(selectedAnswers[i]);
            }
        }
    }

    function playAgain() {
        setSelectedAnswers([])
        setShowAnswers(false)
    }

    //Algorithme de Fisher-Yates pour mélanger les élémenrs de manière aléatoire
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j]], [array[j]];
        }
        return array;
    }

    return (
        <>
            <Flou />
            <Navbar currentPage="Quizz" />

            <main className='Quizz'>
                <h1>Quizz</h1>
                {showAnswers && <Confetti width={1800} height={1000}/>}
                <div className='main--Question'>
                    <div className='main--questionsPage'>
                        {allQuizz.map((question, index) => (
                            <div
                                className='question--topic'
                                key={index}
                            >
                                <p className='question'>{question.question}</p>
                                <ul className='answers--list'>
                                    {[,question.answertwo,question.answerone,question.answerthree,question.answerfour].map((answer) => (
                                        <li
                                            key={answer}
                                            onClick={() => handleAnswer(answer, index)}
                                            style={{
                                                backgroundColor:
                                                    showAnswers && answer === question.correctanswer ?
                                                        'green' : selectedAnswers[index] === answer ? "#5892d5" : "transparent"
                                            }}
                                        >
                                            {answer}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>


                    {showAnswers ?
                        <div className='main--button'>
                            <button
                                className='button--check'
                                onClick={playAgain}
                            >
                                Do It Again
                            </button>
                        </div>
                        :
                        <div className='main--button'>
                            <button
                                className='button--check'
                                onClick={handleShowAnswers}
                            >
                                Check answers
                            </button>
                        </div>}

                </div>

                {!showAnswers && <Splash top='950px' left='50px' width='100px' />}
                {!showAnswers && <Splash top='200px' left='1300px' width='150px' />}

            </main>

            <Footer />
        </>
    )
}

export default Quizz