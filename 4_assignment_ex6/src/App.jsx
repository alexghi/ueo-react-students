const animals = ["dog", "cat", "chicken", "cow", "sheep", "horse"];

function ListAnimals(props) {
  return (
    <div>
      <ul
        style={{
          height: "150px",
          width: "100px",
          border: "1px solid",
          borderRadius: "10px",
          overflow: "hidden",
          margin: "5px",
        }}
      >
        {props.theList.map((animal) => (
          <div key={animal}>
            <li>{animal}</li>
          </div>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <div
      style={{
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "50px",
      }}
    >
      <ListAnimals theList = {animals} />
    </div>
  );
}

export default App;
