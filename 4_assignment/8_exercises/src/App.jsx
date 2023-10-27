import './App.css'

function App() {
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
    }
  ]

  const DataCard = (props) => {
    const {jokeSetup, jokePunchline } = props
    return <>
      <div className='jokeCard'>
          <h2>{jokeSetup}</h2>
          <p>{jokePunchline}</p>
      </div>
    </>
  }

  return (
    <>
      <div className="card">
        {data.map((joke, index)=>{
          return<>
            <DataCard 
            key={index}
            jokeSetup={joke.setup}
            jokePunchline={joke.punchline}
            />
          </>
        })}
      </div>
    </>
  )
}

export default App
