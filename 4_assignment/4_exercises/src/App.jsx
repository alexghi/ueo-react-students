import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      </div>
      <div className="card">
        <p>Button has been clicked: {count} times</p>
        <button onClick={() => setCount((count) => count + 1)}>
          Click me
        </button>
      </div>
    </>
  )
}

export default App
