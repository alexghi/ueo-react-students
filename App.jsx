import './App.css'

const ToDoList = (props) => {
  console.log(props);
  const { name, id, breakfast, lunch, dinner } = props;

  return (
    <div className={"container"}>
      <h1>{name}</h1>
      <h3>Breakfast: {breakfast}</h3>
      <h3>Lunch: {lunch}</h3>
      <h3>Dinner: {dinner}</h3>
    </div>
  );
};

const days = [
  {
    name: 'monday',
    id: 1,
    breakfast: 'Cereale cu lapte',
    lunch: 'cartofi cu cartofi',
    dinner: 'Steak cu pieru sau piure',
  },
  {
    name: 'tuesday',
    id: 2,
    breakfast: 'b1',
    lunch: 'b2',
    dinner: 'b3',  
  },
  {
    name: 'wednesday',
    id: 3,
    breakfast: 'b1',
    lunch: 'b2',
    dinner: 'b3',  
  },
  {
    name: 'thursday',
    id: 4,
    breakfast: 'b1',
    lunch: 'b2',
    dinner: 'b3',  
  },
  {
    name: 'friday',
    id: 5,
    breakfast: 'b1',
    lunch: 'b2',
    dinner: 'b3',  
  },
  {
    name: 'saturday',
    id: 6,
    breakfast: 'b1',
    lunch: 'b2',
    dinner: 'b3',  
  },
  {
    name: 'sunday',
    id: 7,
    breakfast: 'b1',
    lunch: 'b2',
    dinner: 'b3',  
  },

]


function App() {
  return <div>
  {days.map(day => {
    return (
      <ToDoList
        name={day.name}
        breakfast={day.breakfast}
        lunch={day.lunch}
        dinner={day.dinner}
      />
    );
  })}
</div>
}

export default App
