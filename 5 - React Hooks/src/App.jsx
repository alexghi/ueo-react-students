import { useCallback, useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(100)
  const [age, setAge] = useState(20)
  const [name, setName] = useState('')
  const inputReference = useRef(null)

  console.log(inputReference?.current?.value)

  const onInputChange = useCallback((event) => {
    setName(event.target.value)
  }, [setName])

  const onDecrementBtnClick = useCallback(
    () => {
      console.log('age inside decrement', age)
      setCount(count - 1)
    },
    [setCount, count]
  )

  const increaseAge = useCallback(() => {
    console.log('age inside', age)
    setAge(age + 1)
  })


  useEffect(() => {
   console.log('componentDidMount or componentDidUpdate') 

   return () => {
    console.log('component Will Unmount')
   }
  }, [])



  return (
    <>
      <div>
        <div>{name}</div>
        <input ref={inputReference} value={name} onChange={onInputChange} />
        <div>age: {age}</div>
        <button onClick={increaseAge}>increase age</button>
        <div>current value: {count}</div>
        <button onClick={onDecrementBtnClick}> DECREMENT </button>
      </div>
    </>
  )
}

export default App
