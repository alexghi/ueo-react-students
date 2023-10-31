import './App.css';

function myFunction() {
  alert("Cliked");
}

function App() {
  return (
    <>
      <p>Click the button to display an alert box.</p>
      <button onClick={myFunction}>Click me</button>
    </>
  );
}

export default App;
