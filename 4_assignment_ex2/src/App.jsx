
function App() {

  function showMessage(){
    alert("Clicked!");
  }

  return (
    <div style={{
      margin: "auto",
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '50px'
    }}>
      <button onClick={showMessage}>Click Me</button>
    </div>
  )
}

export default App
