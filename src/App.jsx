//import React from 'react'
import Navbar from './components/common/Navbar'
import { Route, Routes  } from "react-router-dom"
import LoginForm from './components/core/auth/LoginForm'
import SignupForm from './components/core/auth/SignupForm'
import ComplaintForm from './components/common/ComplaintForm'
import Home from './components/common/Home'
import Dashboard from './components/common/Dashboard'
import Footer from './components/common/Footer'


const App = () => {
  return (
    <div className="flex min-h-screen w-full flex-col bg-richblack-900 font-inter ">
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

       <Route
          path="dashboard"
          element={
            //<OpenRoute>
              <Dashboard />
            //</OpenRoute>
          }
        />

        <Route
          path="createComplaint"
          element={
            //<OpenRoute>
              <ComplaintForm />
            //</OpenRoute>
          }
        />
        </Routes>
        <Footer/>
    </div>
    
  )
}

export default App
