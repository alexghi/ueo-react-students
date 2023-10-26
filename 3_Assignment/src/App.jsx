import "./App.css";

// const CarPhoto = (props) => {
//   const { photo } = props

//   return <img
//     style={{
//       objectFit: 'contain'
//     }}
//     height={150}
//     src={photo}>

//   </img>
// }

const Title = (props) => {
  const { title } = props;
  return <h2>{title}</h2>;
};

const Description = (props) => {
  const { text } = props;
  return <p style={{ color: "#ccc" }}>{text}</p>;
};
const FoodList = (props) => {
  const { text } = props;
  return <p style={{ color: "#ccc" }}>{text}</p>;
  
};
const MicDeJun = (props) => {
  const { text } = props;
  return <p style={{ color: "#ccc" }}>{text}</p>;
  
};
const DayTile = (props) => {
  const { description, day, foodList } = props;

  const columnStyle = {
    display: "inline-block",
    width: "200px",
    margin: "50px", 
    padding: "1px", 
    border: "1px solid #ccc", 
    textAlign: "center",
  };
  return (
    <div  style={columnStyle}>
      <Title title={day} />
      <Description text={description} />
      <FoodList text={foodList} />
    </div>
  );
};


const cars = [
  {
    day: "Luni",
    description: "Meniul pentru luni: ",
    foodList: ["Mic dejun: Omletă", "Prânz: Pizza", "Cină: Paste"],
    
  },
  {
    day: "Marti",
    description:"Meniul pentru marti: ",
    foodList: ["Mic dejun: Cereale", "Prânz: Sandwich", "Cină: Pește"],
  },
  {
    day: "Miercuri",
    description:"Meniul pentru miercuri: ",
    foodList: ["Mic dejun: Iaurt", "Prânz: Lasagna", "Cină: Salată"],
  },
  {
    day: "Joi",
    description:"Meniul pentru joi",
    foodList: ["Mic dejun: Clătite", "Prânz: Tocăniță", "Cină: Friptură"],
  },
  {
    day: "Vineri",
    description:"Meniul pentru vineri: ",
    foodList: ["Mic dejun: Bacon și ouă", "Prânz: Pui cu orez", "Cină: Tăiței"],
  },
  {
    day: "Sambata",
    description:"Meniul pentru sambata: ",
    foodList: ["Mic dejun: Smoothie", "Prânz: Burger", "Cină: Sushi"],
  },
  {
    day: "Duminica",
    description: "Zi de odihna",
   // foodList: ["Mic dejun:  ", "Prânz: ", "Cină: "],
  },
];

function App() {
  return (
    <div>
      {cars.map((car, index) => {
        return (
          <DayTile key={index} day={car.day} description={car.description} foodList={car.foodList} />
        );
      })}
    </div>
  );
}

export default App;
