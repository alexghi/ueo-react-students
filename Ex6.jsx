import './App.css'
import { FaCat } from 'react-icons/fa';
import { BiSolidDog } from 'react-icons/bi';
import { SiHappycow } from 'react-icons/si';

function App() {
  const animals = [
    {
      animal: "dog",
      icon: <BiSolidDog />
    },
    {
      animal: "cat",
      icon: <FaCat />
    },
    {
      animal: "cow",
      icon: <SiHappycow />
    },
  ];

  const animalList = animals.map((animal, index) => (
    <li key={index}>
      {animal.icon} {animal.animal}
    </li>
  ));

  return (
    <div className="container">
      <ul>
        {animalList}
      </ul>
    </div>
  );
}

export default App;