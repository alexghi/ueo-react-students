import './App.css'

const todos = [
  {
    day: 'Sunday',
    shopingList: [{
      breakfast: ['Eggs', 'Spinach', 'Tomatoes'],
      lunch: ['Chicken breast', 'Mixed greens', 'Vinaigrette dressing'],
      dinner: ['Salmon fillets', 'Quinoa', 'Asparagus']
    }],
    breakfast: 'Scrambled eggs with spinach and tomatoes',
    lunch: 'Grilled chicken salad with mixed greens and vinaigrette',
    dinner: 'Baked salmon with quinoa and steamed asparagus'
  },
  {
    day: 'Monday',
    shopingList: [{
      breakfast: ['Greek yogurt', 'Honey', 'Fresh berries'],
      lunch: ['Turkey slices', 'Avocado', 'Whole wheat tortillas'],
      dinner: ['Canned chickpeas', 'Cucumber', 'Feta cheese', 'Ingredients for a vegetarian chili']
    }],
    breakfast: 'Greek yogurt with honey and fresh berries',
    lunch: 'Turkey and avocado wrap with whole wheat tortilla',
    dinner: 'Vegetarian chili with a side of brown rice'
  },
  {
    day: 'Tuesday',
    shopingList: [{
      breakfast: ['Oats', 'Bananas', 'Almond butter'],
      lunch: ['Chicken breast', 'Quinoa', 'Spinach'],
      dinner: ['Shrimp', 'Sweet potatoes', 'Broccoli']
    }],
    breakfast: 'Oatmeal with sliced bananas and a drizzle of almond butter',
    lunch: 'Quinoa salad with chickpeas, cucumbers, and feta cheese',
    dinner: 'Grilled shrimp with roasted sweet potatoes and broccoli'
  },
  {
    day: 'Wensday',
    shopingList: [{
      breakfast: ['Whole grain bread', 'Peanut butter', 'Strawberries'],
      lunch: ['Spinach', 'Feta cheese', 'Ingredients for chicken stuffing'],
      dinner: ['Beef', 'Mixed vegetables', 'Brown rice']
    }],
    breakfast: 'Whole grain toast with peanut butter and sliced strawberries',
    lunch: 'Spinach and feta stuffed chicken breast with a side of quinoa',
    dinner: 'Beef stir-fry with mixed vegetables and brown rice'
  },
  {
    day: 'Thuesday',
    shopingList: [{
      breakfast: ['Almond milk', 'Spinach', 'Banana', 'Protein powder'],
      lunch: ['Lentils', 'Whole-grain crackers'],
      dinner: ['Tilapia fillets', 'Lemons', 'Dill', 'Green beans', 'Couscous']
    }],
    breakfast: 'Smoothie with spinach, banana, almond milk, and protein powder',
    lunch: 'Lentil soup with a side of whole-grain crackers',
    dinner: 'Baked tilapia with a lemon-dill sauce, steamed green beans, and couscous'
  },
  {
    day: 'Friday',
    shopingList: [{
      breakfast: ['Tofu', 'Bell peppers', 'Onions'],
      lunch: ['Fresh mozzarella', 'Tomatoes', 'Basil'],
      dinner: ['Beef', 'Mixed vegetables', 'Wild rice']
    }],
    breakfast: 'Scrambled tofu with bell peppers and onions',
    lunch: 'Caprese salad with fresh mozzarella, tomatoes, and basil',
    dinner: 'Beef and vegetable kebabs with a side of wild rice'
  },
  {
    day: 'Saturday',
    shopingList: [{
      breakfast: ['Cottage cheese', 'Pineapple', 'Cinnamon'],
      lunch: ['Quinoa', 'Black beans', 'Bell peppers'],
      dinner: ['Portobello mushrooms', 'Balsamic glaze', 'Sweet potatoes', 'Spinach']
    }],
    breakfast: 'Cottage cheese with pineapple chunks and a sprinkle of cinnamon',
    lunch: 'Quinoa and black bean stuffed bell peppers',
    dinner: 'Grilled portobello mushrooms with a balsamic glaze, served with mashed sweet potatoes and sautéed spinach'
  },
]

const Day = (props) => {
  const { day } = props
  return <h1>{day}</h1>
}

const ShopingList = (props) => {
  const { shopingList } = props
  return <>
    <div className="shopingList">
      <br />
      <ul></ul>
      {shopingList.map((meniu) => {
        return <>
          <b>for breakfast we need: </b> {meniu.breakfast.map((element) => {
            return <>
              <ul className='unorderdList'>
                <li>
                  {element}
                </li>
              </ul>
            </>
          })}
          <b>for lunch we need: </b> {meniu.lunch.map((element) => {
            return <>
              <ul className='unorderdList'>
                <li>
                  {element}
                </li>
              </ul>
            </>
          })}
          <b>for dinner we need: </b> {meniu.dinner.map((element) => {
            return <>
              <ul className='unorderdList'>
                <li>
                  {element}
                </li>
              </ul>
            </>
          })}
        </>
      })}
    </div>
  </>
}

const Breakfast = (props) => {
  const { breakfast } = props
  return <p><b>Breakfast is:</b> {breakfast}</p>
}
const Lunch = (props) => {
  const { lunch } = props
  return <p><b>Lunch is:</b> {lunch}</p>
}
const Dinner = (props) => {
  const { dinner } = props
  return <p><b>Dinner is:</b> {dinner}</p>
}

const DayCard = (props) => {
  const { day, shopingList, breakfast, lunch, dinner } = props
  return <div className='container'>
    <Day day={day} />
    <Breakfast breakfast={breakfast} />
    <Lunch lunch={lunch} />
    <Dinner dinner={dinner} />
    <ShopingList shopingList={shopingList} />
  </div>
}


function App() {
  return (
    <>
      <div className='wraper'>
        {todos.map((day, index) => {
          return <>
              <DayCard
                key={index}
                day={day.day}
                shopingList={day.shopingList}
                breakfast={day.breakfast}
                lunch={day.lunch}
                dinner={day.dinner}
              />
          </>
        })}
      </div>
    </>
  )
}

export default App
