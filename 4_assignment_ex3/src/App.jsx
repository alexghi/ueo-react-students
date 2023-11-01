
function Button(props) {

  function showMessage(){
    // eslint-disable-next-line react/prop-types
    alert(props.children);
  }

  return (
    <button
      style={{margin: '5px'}}
      onClick={showMessage}
    >
      Click Me
    </button>
  )
}

function App() {

  return (
    <div style={{
      margin: "auto",
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '50px'
    }}>
      <Button >Button 1</Button>

      <Button >Button 2</Button>

      <Button >Button 3</Button>
    </div>
  )
}

export default App
