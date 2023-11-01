import './App.css'

function AnimalList(props) {
  const listItems = props.animals.map((animal) =>
    <li>{animal}</li>
  );
  return (
    <div>
      <ul>{listItems}</ul>
    </div>
  );
}

function App() {
  const animals = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse'];

  return (
    <>
      <AnimalList animals={animals} />
    </>
  )
}

export default App
