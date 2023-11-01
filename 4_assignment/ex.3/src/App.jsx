/* eslint-disable react/prop-types */
import "./App.css";

const Button = ({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>;
};

const App = () => {
  const handleClick = (buttonText) => {
    alert(`Clicked ${buttonText}!`);
  };

  return (
    <div>
      <Button onClick={() => handleClick("Button 1")}>Button 1</Button>
      <Button onClick={() => handleClick("Button 2")}>Button 2</Button>
      <Button onClick={() => handleClick("Button 3")}>Button 3</Button>
    </div>
  );
};

export default App;
