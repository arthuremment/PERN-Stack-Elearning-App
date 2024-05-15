import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import parse from 'html-react-parser'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Flou from '../../Components/Flou/Flou'
import './Course.css'


const Course = ({ data }) => {

  const redirect = useNavigate();
  const params = useParams()

  const [course, setCourse] = useState([])
  //console.log(props.data[])

  useEffect(() => {
      setCourse(data[parseInt(params.id) - 1])
  }, [])

    return (
      <>
        <Flou />
        <Navbar currentPage="Courses" />

        <main className='course'>
          <div>
            <h1>{course.chapter}</h1>
            <h2>{course.description && parse(course.description)}</h2>
          </div>

          <article>{course.course && parse(course.course)}</article> 

          <button onClick={() => { redirect("/Quizz/" + parseInt(params.id)) }}>Faire le Quizz</button>
        </main>

        <Footer />
      </>
    )

}

export default Course