//import React from 'react'
import Navbar from './components/common/Navbar'
import { Route, Routes  } from "react-router-dom"
import LoginForm from './components/core/auth/LoginForm'
import SignupForm from './components/core/auth/SignupForm'
import ComplaintCard from './components/common/ComplaintCard'
import ComplaintForm from './components/common/ComplaintForm'
import Home from './components/common/Home'


const App = () => {
  return (
    <div className="flex min-h-screen w-screen flex-col bg-richblack-900 font-inter ">
        <Navbar/>
        <Routes>
          <Route
            path="login"
            element={
              //<OpenRoute>
                <LoginForm />
              //</OpenRoute>
            }
        />
        <Route
          path="signup"
          element={
            //<OpenRoute>
              <SignupForm />
            //</OpenRoute>
          }
        />
        <Route
          path="contact"
          element={
            //<OpenRoute>
              <ComplaintCard />
            //</OpenRoute>
          }
        />
        <Route
          path="/complaint"
          element={
            //<OpenRoute>
              <ComplaintForm />
            //</OpenRoute>
          }
        />
        <Route
          path="/"
          element={
            //<OpenRoute>
              <Home />
            //</OpenRoute>
          }
        />
        </Routes>
    </div>
    
  )
}

export default App
