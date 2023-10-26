import { useState } from 'react'
import './App.css'

const animals = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse']


const ListComponent = (props) => {
  const { animals } = props
  return (
    <div>
      {animals.map((element) => {
        return <div className='listDrawer'>
          <div key={element}>{element}</div>
        </div>
      })}
    </div>
  )
}


function App() {
  return (
    <>
      <div className="card">
        <ListComponent animals={animals} />
      </div>
    </>
  )
}

export default App
