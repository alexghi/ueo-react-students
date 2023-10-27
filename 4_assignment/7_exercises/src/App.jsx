import { useState, useCallback} from 'react'
import './App.css'

function App() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const onInputChangeFirstName = useCallback((event) => {
    setFirstName(event.target.value)
  }, [setFirstName])

  const onInputChangeLastName = useCallback((event) => {
    setLastName(event.target.value)
  }, [setLastName])

  const sayHi = () => {
    alert('Hi ' + lastName + ' ' + firstName)
  }


  return (
    <>
      <div className="card">
        <div>
          <div>
            <input value={lastName} onChange={onInputChangeLastName} />
          </div>
          <div>
            <input value={firstName} onChange={onInputChangeFirstName} />
          </div>
        </div>
        <button onClick={sayHi}>Say Hi!</button>
      </div>
    </>
  )
}

export default App
