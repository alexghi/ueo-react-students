import React, { useState } from 'react';

function App() {
  const [todoLists, setTodoLists] = useState([
    { day: 'Luni', meals: ['Mic dejun', 'Prânz', 'Cină'], shoppingList: [] },
    { day: 'Marți', meals: ['Mic dejun', 'Prânz', 'Cină'], shoppingList: [] },
    { day: 'Miercuri', meals: ['Mic dejun', 'Prânz', 'Cină'], shoppingList: [] },
    { day: 'Joi', meals: ['Mic dejun', 'Prânz', 'Cină'], shoppingList: [] },
    { day: 'Vineri', meals: ['Mic dejun', 'Prânz', 'Cină'], shoppingList: [] },
    { day: 'Sâmbătă', meals: ['Mic dejun', 'Prânz', 'Cină'], shoppingList: [] },
    { day: 'Duminică', meals: ['Mic dejun', 'Prânz', 'Cină'], shoppingList: [] },
  ]);

  const addToList = (day, meal, item, setInput) => {
    if (item) {
      const updatedLists = todoLists.map((list) => {
        if (list.day === day) {
          list.shoppingList.push({ meal, item });
        }
        return list;
      });
      setTodoLists(updatedLists);
      setInput('');
    }
  };

  const handleKeyPress = (event, day, meal, item, setInput) => {
    if (event.key === 'Enter') {
      addToList(day, meal, item, setInput);
    }
  };

  return (
    <div className="App">
      <h1>Liste de sarcini și cumpărături</h1>
      {todoLists.map((list) => (
        <div key={list.day}>
          <h2>{list.day}</h2>
          <h3>Listă de sarcini:</h3>
          <ul>
            {list.meals.map((meal) => {
              let input;
              return (
                <li key={meal}>
                  {meal}
                  <input
                    type="text"
                    ref={(ref) => {
                      input = ref;
                    }}
                    placeholder={`Adaugă ${meal.toLowerCase()}`}
                    onKeyPress={(e) => handleKeyPress(e, list.day, meal, input.value, () => (input.value = ''))}
                  />
                </li>
              );
            })}
          </ul>
          <h3>Listă de cumpărături:</h3>
          <ul>
            {list.shoppingList.map((item, index) => (
              <li key={index}>
                {item.meal}: {item.item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default App;


