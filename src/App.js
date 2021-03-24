import UseContext from './native_hooks/useContext'
import UseEffect from './native_hooks/useEffect'
import UseReducer from './native_hooks/useReducer'
import UseRef from './native_hooks/useRef'
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
      <hr />
      <UseRef />
    </div>
  )
}

export default App
