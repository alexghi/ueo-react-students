import './App.css'

function Button(props) {
  const handleClick = () => {
    alert(`You clicked on ${props.children} !`);
  };

  return (
    <button onClick={handleClick}>
      {props.children}
    </button>
  );
}

function App() {
  return (
    <div className="container">
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </div>
  );
}

export default App
