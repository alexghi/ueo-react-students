import React, { useState } from 'react';
import './App.css';

//Exercise 3 Button
//const Button = ({ text }) => {
//  const handleClick = () => {
//    alert(`Clicked ${text} button!`);
//  };

//  return <button onClick={handleClick}>{text}</button>;
//};

function App() {

//Exercise 1
  const squareStyle = {
    width: '800px',
    height: '800px',
    backgroundColor: 'yellow',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div className="App">
      <div style={squareStyle}>
        <p>Hello, World!</p>
     </div>
    </div>
  );



//Exercise 2
//const handleClick = () => {
//  alert('Clicked!');
//};

//return (
//  <div className="App">
//    <button onClick={handleClick}>Click me</button>
//  </div>
//);



//Exercise 3
//return (
//  <div className="App">
//    <Button text="Button 1" />
//    <Button text="Button 2" />
//    <Button text="Button 3" />
//  </div>
//);



//Exercise 4
//const [clickCount, setClickCount] = useState(0);

//const handleButtonClick = () => {
//  setClickCount(clickCount + 1);
//};

//return (
//  <div className="App">
//    <button onClick={handleButtonClick}>Click me</button>
//    <p>Button has been clicked: {clickCount}</p>
//  </div>
//);



//Exercise 5
//const animals = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse'];

//return (
//  <div className="App">
//    <ul>
//      {animals.map((animal, index) => (
//        <li key={index}>{animal}</li>
//      ))}
//    </ul>
//  </div>
//);



//Exercise 7
//const [firstName, setFirstName] = useState('');
//const [lastName, setLastName] = useState('');

//const handleFirstNameChange = (event) => {
//  setFirstName(event.target.value);
//};

//const handleLastNameChange = (event) => {
//  setLastName(event.target.value);
//};

//const handleGreetMeClick = () => {
//  alert(`Hello ${firstName} ${lastName}!`);
//};

//return (
//  <div>
//    <div>
//      <label>First Name:</label>
//      <input type="text" value={firstName} onChange={handleFirstNameChange} />
//    </div>
//    <div>
//      <label>Last Name:</label>
//      <input type="text" value={lastName} onChange={handleLastNameChange} />
//    </div>
//    <div>
//      <button className="greet-me-button" onClick={handleGreetMeClick}>
//       Greet Me
//      </button>
//    </div>
//  </div>
//);
}

export default App;
