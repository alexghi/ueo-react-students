import "./App.css";
import { useState } from "react";

const App = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleGreet = () => {
    alert(`Hello ${firstName} ${lastName}!`);
  };

  return (
    <div>
      <div>
        <label>First Name:</label>
        <input
          type="text"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
      </div>
      <div>
        <label>Last Name:</label>
        <input
          type="text"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />
      </div>
      <div>
        <button onClick={handleGreet}>Greet Me!</button>
      </div>
    </div>
  );
};

export default App;
