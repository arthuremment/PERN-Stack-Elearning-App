import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Flou from '../../Components/Flou/Flou'
import './AllQuizz.css'

const AllQuizz = () => {

    const redirect = useNavigate();

    var length = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    return (
        <>
            <Flou />
            <Navbar currentPage="Quizz" />

            <main className='AllQuizz'>
                <h1>Mes Quizz</h1>
                <div className='grid'>
                    {
                        length.map((quizz) => {
                            return (
                                <div onClick={() => { redirect("/Quizz/" + quizz) }} className='card'>
                                    <h2>QUIZZ {quizz}</h2>
                                    <p>Teste tes connaissances sur la lecon  {quizz}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </main>

            <Footer />
        </>
    )
}

export default AllQuizz