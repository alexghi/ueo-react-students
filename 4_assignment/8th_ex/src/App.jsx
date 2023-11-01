import './App.css'

import jokes from './jokes.json';

function App() {
  return (
    <>
      {jokes.map((joke) => (
        <div className="container" key={joke.id}>
          <h3>{joke.setup}</h3>
          <p>{joke.punchline}</p>
        </div>
      ))}
    </>
  );
}

export default App
