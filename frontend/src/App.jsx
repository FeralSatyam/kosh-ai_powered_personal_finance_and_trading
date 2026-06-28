import { useState } from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUp'
import LandingPage from './pages/LandingPage'
import DashboardPage from './pages/DashboardPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<LandingPage></LandingPage>}></Route>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/dashboard' element={<DashboardPage />}></Route>

      </Routes>

    </BrowserRouter>
  )
}

export default App
