import UseContext from './native_hooks/useContext'
import UseEffect from './native_hooks/useEffect'
import UseState from './native_hooks/useState'

function App() {
  return (
    <div className="App">
      <UseState />
      <hr />
      <UseEffect />
      <hr />
      <UseContext />
    </div>
  )
}

export default App
