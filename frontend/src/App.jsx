import { useState } from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>

      <Routes>

        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignUpPage />} />

      </Routes>

    </BrowserRouter>
  )
}

export default App
