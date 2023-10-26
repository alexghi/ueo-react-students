import { useState } from 'react'
import './App.css'

const getAlert = () => {
  alert('Clicked !!!')
}


function App() {
  return (
    <>
      <div>
        <button onClick={getAlert} >Click me</button>        
      </div>
    </>
  )
}

export default App
