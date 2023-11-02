import './App.css'
import React, { useState } from 'react';

function Joke({ id, setup, punchline }) {
  return (
    <div className="joke" key={id}>
      <p className="setup">{setup}</p>
      <p className="punchline">{punchline}</p>
    </div>
  );
}

function App() {
  const jokes = [
    {
      id: 1,
      setup: "What's the best thing about a Boolean?",
      punchline: "Even if you're wrong, you're only off by a bit"
    },
    {
      id: 2,
      setup: "Why do programmers wear glasses?",
      punchline: "Because they need to C#"
    }
  ];

  const jokeList = jokes.map(joke => (
    <Joke
      key={joke.id}
      id={joke.id}
      setup={joke.setup}
      punchline={joke.punchline}
    />
  ));

  return (
    <div className="container">
      <h2>Jokes</h2>
      {jokeList}
    </div>
  );
}

export default App;
