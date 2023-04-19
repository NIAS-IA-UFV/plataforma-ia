import { useState } from 'react'
import { Routes, Route} from "react-router-dom"
import Home from "./components/home/Home"
import Login from "./components/login/Login"
import Register from "./components/register/Register"
import Dashboard from "./components/dashboard/Dashboard"
import ProtectedRoute from "./components/protectedroute/ProtectedRoute"
import Input from "./components/input/Input"
import ForgotPassword from "./components/forgotpassword/ForgotPassword"
import { AuthContextProvider } from './context/AuthContext'
import Competition from "./components/competition/Competition"


function App() {

  return (
    <div className="App">
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/recovery" element={<ForgotPassword/>}/>
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
          <Route path="/competition" element={<ProtectedRoute><Competition/></ProtectedRoute>}/>
          <Route path="/input" element={<ProtectedRoute><Input/></ProtectedRoute>}/>
        </Routes>
      </AuthContextProvider>
    </div>
  )
}

export default App
