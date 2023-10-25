import { useState } from 'react'
import './App.css'

const days = [
  { name: 'Monday', id: 1, breakfast: ["lapte", "cereale"], lunch: ["pui", "orez"], dinner: ["legume", "fructe"] },
  { name: 'Tuesday', id: 2, breakfast: ["lapte", "ovaz", "banana"], lunch: ["pui", "orez"], dinner: ["mazare", "ciuperci"] },
  { name: 'Wednesday', id: 3, breakfast: ["lapte", "cereale"], lunch: ["pui", "cartofi"], dinner: ["legume", "fructe"] },
  { name: 'Thursday', id: 4, breakfast: ["lapte", "ovaz", "banana"], lunch: ["pui", "cartofi"], dinner: ["legume", "fructe"] },
  { name: 'Friday', id: 5, breakfast: ["lapte", "cereale"], lunch: ["vita", "orez"], dinner: ["legume", "fructe"] },
  { name: 'Saturday', id: 6, breakfast: ["lapte", "ovaz", "banana"], lunch: ["vita", "orez"], dinner: ["legume", "fructe"] },
  { name: 'Sunday', id: 7, breakfast: ["lapte", "cereale"], lunch: ["pui", "orez"], dinner: ["legume", "fructe"] },
];

const list = days.map(day =>
  <div style={{
    display: 'flex',
    flexDirection:'column',
    height: '360px',
    width: '300px',
    border: '1px solid',
    borderRadius: '10px',
    overflow: 'hidden',
    margin: '5px',
  }}
    key={day.id}>

    <h4>{day.name}</h4>

    <h5 style={{margin: '0', padding: '0'}}>Breakfast</h5>
    <ul style={{textAlign: 'left', marginTop: '0'}}>
      {day.breakfast.map(food => <li>{food}</li>)}
    </ul>

    <h5 style={{margin: '0', padding: '0'}}>Lunch</h5>
    <ul style={{textAlign: 'left', marginTop: '0'}}>
      {day.lunch.map(food => <li>{food}</li>)}
    </ul>

    <h5 style={{margin: '0', padding: '0'}}>Dinner</h5>
    <ul style={{textAlign: 'left',marginTop: '0'}}>
      {day.dinner.map(food => <li>{food}</li>)}
    </ul>
  </div>
);

function App() {

  return (
    <div style={{
      display: 'flex',
    }}>
      {list}
    </div>
  )
}

export default App
