import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { AuthProvider } from './hook/useAuth'
import Home from './Pages/Home/Home'
import Courses from './Pages/Courses/Courses'
import Course from './Pages/Course/Course'
import Login from './Pages/Login/Login'
import SignUp from './Pages/SignUp/SignUp'
import AllQuizz from './Pages/AllQuizz/AllQuizz'
import Quizz from './Pages/Quizz/Quizz'
import Forum from './Pages/Forum/Forum'
import NotFound from './Pages/NotFound/NotFound'
import { ProtectedRoute } from './Components/ProtectedRoute/ProtectedRoute'
import './App.css'



function App() {

  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  const getCourses = async () => {
    try {
      const response = await fetch("http://localhost:4000/courses");
      const jsonData = await response.json();

      setCourses(jsonData)

      setIsLoading(false)
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    getCourses();
  }, [])

  return (

    <>
      <Router>
        <AuthProvider>

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/SignUp' element={<SignUp />} />
            <Route
              path='/Courses'
              element={
                <ProtectedRoute>
                  <Courses data={courses} />
                </ProtectedRoute>
              }
            />
            <Route exact path='/Course/:id' element={<Course data={courses} isLoading={isLoading} />} />

            <Route 
              exact path='/Quizz' 
              element={
                <ProtectedRoute>
                  <AllQuizz />
                </ProtectedRoute>
                
              } 
            />
            <Route path='/Quizz/:id' element={<Quizz />} />

            <Route
              path='/Forum'
              element={
                <ProtectedRoute>
                  <Forum />
                </ProtectedRoute>
              }
            />

            <Route Component={<NotFound />} />
          </Routes>


        </AuthProvider>
      </Router>

    </>
  )
}

export default App
