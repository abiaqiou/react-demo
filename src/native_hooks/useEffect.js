import { useEffect, useState } from 'react'

const UseEffect = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('deps is undefined, useEffect callback start')

    return () => {
      console.log('deps is undefined, useEffect callback return')
    }
  })

  useEffect(() => {
    console.log('deps is [], useEffect callback start')

    return () => {
      console.log('deps is [], useEffect callback return')
    }
  }, [])

  useEffect(() => {
    console.log('deps is count, useEffect callback start')

    return () => {
      console.log('deps is count, useEffect callback return')
    }
  }, [count])

  return (
    <div>
      <h2>useEffect</h2>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  )
}

export default UseEffect
