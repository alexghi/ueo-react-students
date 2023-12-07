import { useCallback, useState, useEffect, useRef } from 'react'
<<<<<<< HEAD
=======
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
>>>>>>> 98e91879acdf4455f1bd9c60ba225803a223db2c
import './App.css'

function App() {
  const [count, setCount] = useState(100)
<<<<<<< HEAD
  const [name, setName] = useState('')
  const inputReference = useRef(null)

  const increaseTheValue = useCallback(() => {
    setCount(count - 1)
  })
=======
  const [age, setAge] = useState(20)
  const [name, setName] = useState('')
  const inputReference = useRef(null)

  console.log(inputReference?.current?.value)
>>>>>>> 98e91879acdf4455f1bd9c60ba225803a223db2c

  const onInputChange = useCallback((event) => {
    setName(event.target.value)
  }, [setName])

<<<<<<< HEAD
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
=======
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
>>>>>>> 98e91879acdf4455f1bd9c60ba225803a223db2c
      </div>
    </>
  )
}

export default App
