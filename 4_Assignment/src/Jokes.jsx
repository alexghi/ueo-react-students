
function Joke({ joke }) {
  return (
    <div className="joke">
      <p className="setup">{joke.setup}</p>
      <p className="punchline">{joke.punchline}</p>
    </div>
  );
}

export default Joke;
