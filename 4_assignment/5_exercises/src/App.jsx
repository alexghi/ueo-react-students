import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const animals = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse']

  return (
    <>
      <div className="card">
        <h4>The list is the following</h4>
        <ul>
            {animals.map((animal) => {
              return <li>{animal}</li>
            })}
        </ul>
      </div>
    </>
  )
}

export default App
