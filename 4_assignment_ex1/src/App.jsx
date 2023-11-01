
function Message() {

  return (
    <p>
      Hello, World!
    </p>
  )
}

function App() {

  return (
    <div style={{
      margin: "auto",
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: "400px",
      width: "400px",
      backgroundColor: "yellow",
      }}>
      <Message></Message>
    </div>
  )
}

export default App
