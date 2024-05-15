import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Flou from '../../Components/Flou/Flou'
import './Courses.css'

const Courses = (props) => {

  const redirect = useNavigate();

  return (
    <>

      <Flou />
      <Navbar currentPage='Courses'/>

      <main className='courses'>
        <h1>Mes Cours</h1>
        <div className='grid'>
          {
            props.data.sort((a, b) => a.course_id - b.course_id).map((course) => {
              return (
                <div key={course.course_id} onClick={() => { redirect("/Course/"+parseInt(course.course_id)) }} className='card'>
                  <h2>{course.chapter}</h2>
                  <p>{course.description}</p>
                </div>
              )
            })
          }
          {/* <div onClick={()=>{redirect("/Course/"+ 1)}} className='card'>
            <h2>CHAPITRE I : INTRODUCTION</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor dolorum assumenda itaque ipsum ad reprehenderit repellat quidem facere amet quaerat, incidunt aperiam distinctio explicabo a doloribus consequatur animi maiores numquam.</p>
          </div>
          <div onClick={()=>{redirect("/Course/"+ 2)}} className='card'>
            <h2>CHAPITRE I : INTRODUCTION</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor dolorum assumenda itaque ipsum ad reprehenderit repellat quidem facere amet quaerat, incidunt aperiam distinctio explicabo a doloribus consequatur animi maiores numquam.</p>
          </div>
          <div onClick={()=>{redirect("/Course/"+ 3)}} className='card'>
            <h2>CHAPITRE I : INTRODUCTION</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor dolorum assumenda itaque ipsum ad reprehenderit repellat quidem facere amet quaerat, incidunt aperiam distinctio explicabo a doloribus consequatur animi maiores numquam.</p>
          </div>
          <div onClick={()=>{redirect("/Course/"+ 4)}} className='card'>
            <h2>CHAPITRE I : INTRODUCTION</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor dolorum assumenda itaque ipsum ad reprehenderit repellat quidem facere amet quaerat, incidunt aperiam distinctio explicabo a doloribus consequatur animi maiores numquam.</p>
          </div> */}
        </div>
      </main>

      <Footer />


    </>
  )
}

export default Courses