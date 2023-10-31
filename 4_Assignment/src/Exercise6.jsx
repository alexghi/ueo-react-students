
import './App.css';

//aici m-am folosit de mai multe surse
//mai mult nu prea l-am facut eu deci poti sa nu-l pui la numaratoare:) 
const animalsWithEmoji = [
  { name: 'dog', emoji: '🐶' },
  { name: 'cat', emoji: '😸' },
  { name: 'chicken', emoji: '🐔' },
  { name: 'cow', emoji: '🐮' },
  { name: 'sheep', emoji: '🐏' },
  { name: 'horse', emoji: '🐴' },
];

function AnimalSquare({ animalName }) {
  const animal = animalsWithEmoji.find(animal => animal.name === animalName);
  const emoji = animal ? animal.emoji : "❓"; // Utilizează emoji-ul corespunzător sau "❓" dacă nu se găsește un emoji

  return (
    <div className="animal-square">
      <span role="img" aria-label="animal emoji">
        {emoji}
      </span>
      {animalName}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1>List of Animals</h1>
      <div className="animal-list">
        {animalsWithEmoji.map((animal, index) => (
          <AnimalSquare key={index} animalName={animal.name} />
        ))}
      </div>
    </div>
  );
}

export default App;
