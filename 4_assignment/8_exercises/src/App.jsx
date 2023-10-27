import './App.css'
const data = [
  {
    id: 1,
    setup: "What's the best thing about a Boolean?",
    punchline: "Even if you're wrong, you're only off by a bit"
  },
  {
    id: 2,
    setup: "Why do programmers wear glasses?",
    punchline: "Because they need to C#"
  }];

const DataCard = (props) => {
  const { jokeSetup, jokePunchline, keyProp } = props;
  console.log(keyProp);
  return (
    <div key={keyProp} className='jokeCard'>
      <h2>{jokeSetup}</h2>
      <p>{jokePunchline}</p>
    </div>
  )
}
function App() {

  return (
    <>
      <div className="card">
        {data.map((joke, index) => (
          <div key={'key' + joke.id}>
            <DataCard
              keyProp={index}
              jokeSetup={joke.setup}
              jokePunchline={joke.punchline}
            />
          </div>
        ))}
      </div>
    </>
  )
}

export default App;