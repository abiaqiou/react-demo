import Memo from './components/Memo'
import UseCallback from './native_hooks/useCallback'
import UseContext from './native_hooks/useContext'
import UseEffect from './native_hooks/useEffect'
import UseMemo from './native_hooks/useMemo'
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
      <hr />
      <UseMemo />
      <hr />
      <UseCallback />
      <hr />
      <Memo value={{ count: 0 }} />
    </div>
  )
}

export default App
