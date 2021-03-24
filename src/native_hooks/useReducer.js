import { useReducer } from 'react'

const countReducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return state + 1
    case 'minus':
      return state - 1
    case 'reset':
      return 0
    default:
      return state
  }
}

const UseReducer = () => {
  const [count, dispatch] = useReducer(countReducer, 0)

  return (
    <div>
      <h2>useReducer</h2>
      <p>{count}</p>
      <button onClick={() => dispatch({ type: 'add' })}>+</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
      <button onClick={() => dispatch({ type: 'minus' })}>-</button>
    </div>
  )
}

export default UseReducer
