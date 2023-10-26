import './App.css'

function action1() {
  return alert('button 1')
}
function action2() {
  return alert('button 2')
}
function action3() {
  return alert('button 3')
}

function App() {
  return (
    <>
      <div>
        <div className="buttons">
          <button onClick={action1}>button 1</button>
          <button onClick={action2}>button 2</button>
          <button onClick={action3}>button 3</button>
        </div>
      </div>
    </>
  )
}

export default App
