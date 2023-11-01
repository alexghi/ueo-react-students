import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
      <div className="card">
        <h2>You pressed the button {count} times</h2>
        <button onClick={() => setCount((count) => count + 1)}>Click me</button>
      </div>
    </>
  )
}

export default App
