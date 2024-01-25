import { Routes, Route, Outlet } from 'react-router-dom'
import Login from './LoginPage'
import Dashboard from './DashboardPage'
import Settings from './SettingsPage'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Login/>} />
          <Route path="/dashboard" >
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/dashboard/settings" element={<Settings/>} />
        </Route>
      </Route>
    </Routes>
    </div>
  )
}

function Layout(){
  return (
    <div>
      <h2>Hello from Layout</h2>
      <Outlet/>
    </div>
  )
}

export default App

