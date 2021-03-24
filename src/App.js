import UseContext from './native_hooks/useContext'
import UseEffect from './native_hooks/useEffect'
import UseReducer from './native_hooks/useReducer'
import UseState from './native_hooks/useState'

function App() {
  return (
    <div className="App">
      <UseState />
      <hr />
      <UseEffect />
      <hr />
      <UseContext />
      <hr />
      <UseReducer />
    </div>
  )
}

export default App
