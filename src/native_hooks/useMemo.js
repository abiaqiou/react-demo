import { useMemo, useState } from 'react'

const getFibonacci = (n) => {
  console.log('getFibonacci run')
  if (n === 1 || n === 2) {
    return 1
  } else {
    return getFibonacci(n - 1) + getFibonacci(n - 2)
  }
}

const UseMemo = () => {
  const [count, setCount] = useState(100)

  // const normalValue = getFibonacci(10)
  const memoedValue = useMemo(() => getFibonacci(10), [])

  return (
    <div>
      <h2>useMemo</h2>
      {/* <p>normalValue: {normalValue}</p> */}
      <p>memoedValue: {memoedValue}</p>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(100)}>Reset</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  )
}

export default UseMemo
