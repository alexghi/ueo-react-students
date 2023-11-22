import { Routes, Route } from 'react-router-dom'
import Login from './LoginPage'
import Dashboard from './DashboardPage'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />}>
          
          <Route path="/dashboard" element={<Dashboard/>} />
        </Route>
    </Routes>
    </div>
  )
}

export default App

