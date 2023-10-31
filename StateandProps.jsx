import { useState } from 'react'
import './App.css'

function ClickCounter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Button has been clicked: {count} times</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <ClickCounter />
    </div>
  );
}

export default App
