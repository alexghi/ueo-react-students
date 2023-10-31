import './App.css';

function App() {
  const squareStyle = {
    width: '500px',
    height: '500px',
    backgroundColor: 'orange',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div style={squareStyle}>
      <p>Hello, World!</p>
    </div>
  );
}

export default App;
