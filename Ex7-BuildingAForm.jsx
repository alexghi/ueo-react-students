import './App.css'
import React, { useState } from 'react';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  }

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  }

  const handleGreetClick = () => {
    alert(`Hello ${firstName} ${lastName}!`);
  }

  return (
    <div className="container">
      <div>
        <input 
          type="text"
          value={firstName} 
          onChange={handleFirstNameChange} 
        />
      </div>
      <div>
        <input 
          type="text" 
          value={lastName} 
          onChange={handleLastNameChange} 
        />
      </div>
      <button onClick={handleGreetClick}>Greet Me</button>
    </div>
  );
}

export default App;
