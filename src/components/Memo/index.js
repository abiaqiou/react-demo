import React, { useState } from 'react'

const Counter = (props) => {
  let { value } = props
  return (
    <div>
      <h2>React.memo</h2>
      <p>count: {value}</p>
    </div>
  )
}

const areEqual = (prevProps, nextProps) => {
  let prev = prevProps.value
  let next = nextProps.value
  return next - prev < 10
}

// 如果函数组件被 React.memo 包裹，且其实现中拥有 useState，useReducer 或 useContext 的 Hook，当 context 发生变化时，它仍会重新渲染
const MemoedCounter = React.memo(Counter, areEqual)

const Memo = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <MemoedCounter value={count} />
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount(count + 10)}>+10</button>
    </div>
  )
}
export default Memo
