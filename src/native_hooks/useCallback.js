import { useCallback, useRef, useState } from 'react'

const UseCallback = () => {
  const [count, setCount] = useState(0)

  const refAdd = useRef(null)
  const refMinus = useRef(null)

  const add = () => {
    setCount((count) => count + 1)
  }
  console.log('Is same add?', refAdd.current === add)
  refAdd.current = add

  const minus = useCallback(() => {
    setCount((count) => count - 1)
  }, [])
  console.log('Is same minus?', refMinus.current === minus)
  refMinus.current = minus

  return (
    <div>
      <h2>useCallback</h2>
      <p>{count}</p>
      <button onClick={add}>+</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={minus}>-</button>
    </div>
  )
}

export default UseCallback
