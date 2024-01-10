import React from 'react';
import './App.css';
import reactLogo from './assets/react.svg';
import { useState } from 'react'

//ex1
// function App() {
//   const containerStyle = {
//     backgroundColor: 'yellow',
//     width: '500px',
//     height: '500px',
//     margin: 'auto',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//   };

//   const headingStyle = {
//     textAlign: 'center',
//     margin: '0',
//   };

//   return (
//     <div className='container' style={containerStyle}>
//       <h2 style={headingStyle}>Hello World</h2>
//     </div>
//   );
// }


//ex2
// function App() {

//   function myFunction() {
//     alert("Clicked!");
//   }

//   return (
//     <button onClick={myFunction}>Click me</button>
//   );

// }

//ex3
// function Button(props) {
//   const handleClick = () => {
//     alert(`You clicked on ${props.children} !`);
//   };

//   return (
//     <button onClick={handleClick}>
//       {props.children}
//     </button>
//   );
// }

// function App() {
//   return (
//     <div className="container">
//       <Button>Button 1</Button>
//       <Button>Button 2</Button>
//       <Button>Button 3</Button>
//     </div>
//   );
// }

//ex4
// function ClickCounter() {
//   const [count, setCount] = useState(0);

//   const handleClick = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div>
//       <p>Button has been clicked: {count} times</p>
//       <button onClick={handleClick}>Click Me</button>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="container">
//       <ClickCounter />
//     </div>
//   );
// }


//ex5
// function App() {
//   const animals = ['dog', 'cat', 'chicken', 'cow', 'horse', 'mokee'];

//   const animalList = animals.map((animal, index) => (
//     <li key={index}>{animal}</li>
//   ));

//   return (
//     <div className="container">
//         {animalList}
//     </div>
//   );
// }


export default App;
