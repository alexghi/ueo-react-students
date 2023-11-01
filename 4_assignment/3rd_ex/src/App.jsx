import { useState } from 'react'
import './App.css'

function Button(props) {
  const handleClick = () => {
    alert(`Button ${props.id} was clicked`)
  }

  return (
    <button onClick={handleClick}>Button {props.id}</button>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Button id={1} />
      <Button id={2} />
      <Button id={3} />
    </>
  )
}

export default App
