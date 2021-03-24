import { useState } from 'react'

const UseState = () => {
  const [count, setCount] = useState(0)

  const addCount = () => {
    console.log('addCount start, count:', count)
    setCount(count + 1)
    // setCount((prevCount) => {
    //   console.log('setCount start, prevCount count:', prevCount)
    //   return prevCount + 1
    // })
    console.log('addCount end, count:', count)
  }

  const minusCount = () => {
    console.log('minusCount start, count:', count)
    setCount(count - 1)
    // setCount((prevCount) => {
    //   console.log('setCount start, prevCount count:', prevCount)
    //   return prevCount - 1
    // })
    console.log('minusCount end, count:', count)
  }
  return (
    <div>
      <h2>UseState</h2>
      <p>{count}</p>
      <button onClick={addCount}>+</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={minusCount}>-</button>
    </div>
  )
}

export default UseState
