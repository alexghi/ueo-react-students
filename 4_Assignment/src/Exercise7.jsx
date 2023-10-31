
import "./App.css";

// eslint-disable-next-line no-undef
class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = { firstName: "", lastName: "" };
  }

  handleFirstNameChange = (event) => {
    this.setState({ firstName: event.target.value });
  };

  handleLastNameChange = (event) => {
    this.setState({ lastName: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alert(`Hello ${this.state.firstName} ${this.state.lastName}!`);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            value={this.state.firstName}
            onChange={this.handleFirstNameChange}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            value={this.state.lastName}
            onChange={this.handleLastNameChange}
          />
        </label>
        <br />
        <button type="submit">Greet Me</button>
      </form>
    );
  }
}

function App() {
  return (
    <div className="App">
      <h1>Greet Me Form</h1>
      <NameForm />
    </div>
  );
}

export default App;
