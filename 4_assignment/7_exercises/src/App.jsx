import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  return (
    <>
      <div className="card">
        <div>
          <input type="text" />
          <input type="text" />
        </div>

        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
