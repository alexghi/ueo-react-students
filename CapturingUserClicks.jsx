import './App.css'

function App() {

  function myFunction() {
    alert("Clicked!");
  }

  return (
    <button onClick={myFunction}>Click me</button>
  );

}

export default App
