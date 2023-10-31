import './App.css';

function myFunction(arg) {
  alert(`You clicked on button: ${arg}`);
}

function App() {
  return (
    <div className="container top-text">
      <button onClick={() => myFunction(1)}>Button 1</button>
      <button onClick={() => myFunction(2)}>Button 2</button>
      <button onClick={() => myFunction(3)}>Button 3</button>
    </div>
  );
}

export default App;
