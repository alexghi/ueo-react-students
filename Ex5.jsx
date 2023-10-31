import './App.css'

function App() {
  const animals = ['dog', 'cat','pig', 'chicken', 'cow', 'sheep', 'horse', 'rabbit'];

  const animalList = animals.map((animal, index) => (
    <li key={index}>{animal}</li>
  ));

  return (
    <div className="container">
        {animalList}
    </div>
  );
}

export default App
