import "./App.css";

const App = () => {
  const items = ["dog", "cat", "chicken", "cow", "sheep", "horse"];

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
