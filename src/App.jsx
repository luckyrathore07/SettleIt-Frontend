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
             
                <LoginForm />
              
            }
        />
        <Route
          path="signup"
          element={
            
              <SignupForm />
             
          }
        />
        <Route
          path="/complaint"
          element={
         
              <ComplaintForm />
            
          }
        />
        <Route
          path="/"
          element={
          
              <Home />
           
          }

        />

       <Route
          path="dashboard"
          element={
             
              <Dashboard />
      
          }
        />

        <Route
          path="createComplaint"
          element={
         
              <ComplaintForm />
             
          }
        />
        </Routes>
        <Footer/>
    </div>
    
  )
}

export default App
