import { useRef, useState } from 'react'

const UseRef = () => {
  const [count, setCount] = useState(0)

  const refInput = useRef(null)
  // useRef 也可以用来保存值
  const refCount = useRef(null)

  return (
    <div>
      <h2>useRef</h2>
      <input ref={refInput} />
      <button onClick={() => refInput.current.focus()}>focus left input</button>

      <p>当前的 count 值: {count}</p>
      <p>之前的 count 值: {refCount.current}</p>
      <button
        onClick={() => {
          refCount.current = count
          setCount(count + 1)
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          refCount.current = count
          setCount(0)
        }}
      >
        Reset
      </button>
      <button
        onClick={() => {
          refCount.current = count
          setCount(count - 1)
        }}
      >
        -
      </button>
    </div>
  )
}

export default UseRef
