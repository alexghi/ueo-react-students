import { useState } from 'react'

function App() {

  const [count, setCount] = useState(0);

  return (
    <div style={{
      margin: "auto",
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '50px'
    }}>
      <p>Button has been clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click Me
      </button>
    </div>
  )
}

export default App

