import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')

  const handleNameChange = (event) => {
    setName(event.target.value)
  }

  const handleSurnameChange = (event) => {
    setSurname(event.target.value)
  }

  const handleGreetMeClick = () => {
    alert(`Hello, ${name} ${surname}!`)
  }

  return (
    <>
      <form>
        <label>
          Name: &nbsp;
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <br />
        <label>
          Surname: &nbsp;
          <input type="text" value={surname} onChange={handleSurnameChange} />
        </label>
        <br />
        <button type="button" onClick={handleGreetMeClick}>
          Greet me
        </button>
      </form>
    </>
  )
}

export default App
