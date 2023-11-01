import "./App.css";

const animalIcons = {
  dog: "🐶",
  cat: "🐱",
  chicken: "🐔",
  cow: "🐮",
  sheep: "🐑",
  horse: "🐴",
};

const App = () => {
  const items = ["dog", "cat", "chicken", "cow", "sheep", "horse"];

  return (
    <div>
      {items.map((animal, index) => (
        <div
          key={index}
          style={{
            border: "1px solid black",
            padding: "10px",
            margin: "10px",
            display: "inline-block",
          }}
        >
          <div style={{ fontSize: "24px" }}>{animalIcons[animal]}</div>
          <div>{animal}</div>
        </div>
      ))}
    </div>
  );
};

export default App;
