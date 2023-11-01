import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const animals = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse'];
  const listItems = animals.map((animals) =>
    <li>{animals}</li>
  );

  return (
    <>
      <div>
        <ul>{listItems}</ul>
      </div>
    </>
  )
}

export default App
