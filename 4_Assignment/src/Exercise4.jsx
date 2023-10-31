import { useCallback, useState } from 'react'
import './App.css';



function App() {
  const [number, setNumber] = useState(0)

  const increaseNumber = useCallback(() => {
    console.log('age inside', number)
    setNumber(number + 1)
  })

  return (
    <div className="container top-text">
      <div>Button has been cliked {number} times</div>
      <button onClick={increaseNumber}>Clik me</button>
    </div>
  );
}

export default App;
