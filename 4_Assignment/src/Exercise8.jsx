
import './App.css';
import Joke from './Jokes'; // Asigură-te că numele fișierului și extensia sunt corecte



function App() {
  return (
    <div className="App">
      <h1>Jokes</h1>
      <div className="joke-list">
        {jokes.map((joke) => (
          <Joke key={joke.id} joke={joke} />
        ))}
      </div>
    </div>
  );
}

export default App;
