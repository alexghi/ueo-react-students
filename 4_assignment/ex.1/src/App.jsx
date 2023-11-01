import "./App.css";

function App() {
  const squareStyle = {
    width: "200px",
    height: "200px",
    backgroundColor: "gold",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  const textStyle = {
    color: "black",
    fontSize: "24px",
  };

  return (
    <div className="App">
      <div style={squareStyle}>
        <p style={textStyle}>Hello, World!</p>
      </div>
    </div>
  );
}

export default App;
