
const animals = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse'];


function App() {
  return (
    <div>
      <h1>List of Animals</h1>
      <ul>
        {animals.map((animal, index) => (
          <li key={index}>{animal}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
