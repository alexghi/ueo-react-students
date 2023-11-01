const animals = ["dog", "cat", "chicken", "cow", "sheep", "horse"];

const list = animals.map((animal) => (
  <div key={animal}>

    <li>{animal}</li>
    
  </div>
));

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
      <ul style={{
        height: "150px",
        width: "100px",
        border: "1px solid",
        borderRadius: "10px",
        overflow: "hidden",
        margin: "5px",
      }}>{list}</ul>
    </div>
  );
}

export default App;
