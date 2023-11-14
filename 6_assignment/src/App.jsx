import { useState } from 'react'
import { Routes, Route, Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import Landing from './components/LandingView.jsx'
import Login from './components/LoginView.jsx'
import Dashboard from './components/DashboardView.jsx'
import Settings from './components/SettingsView.jsx'
import './App.css'

function App() {

  const [count, setCount] = useState(0)

  return (
    <> 
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Dashboard' element={<Dashboard/>}/>
      <Route path='/Dashboard' element={<Dashboard/>}/>
      <Route path='/Settings' element={<Settings/>}/>
    </Routes>

    </>
  )
}

export default App
