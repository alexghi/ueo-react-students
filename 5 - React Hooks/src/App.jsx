import { useCallback, useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(100)
  const [name, setName] = useState('')
  const inputReference = useRef(null)

  const increaseTheValue = useCallback(() => {
    setCount(count - 1)
  })

  const onInputChange = useCallback((event) => {
    setName(event.target.value)
  }, [setName])

  useEffect(() => {
    // console.log('app was mounted')
    return () => {
      // console.log('component will unount')
    }
  })

  return (
    <>
      <div>
        <div>Name is: {name}</div>
        <input ref={inputReference} value={name} onChange={onInputChange} />
        <div>current value: {count}</div>
        <button onClick={increaseTheValue}>Decrese value</button>
      </div>
    </>
  )
}

export default App
