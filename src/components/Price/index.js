import axios from 'axios'
import { useEffect, useState } from 'react'
import './index.css'

const Price = (props) => {
  let [value, setValue] = useState(0)

  useEffect(() => {
    axios
      .get('https://api.mugglepay.com/api/usdt')
      .then((res) => res.data)
      .then((data) => setValue(data.price))
  }, [])

  let { currency } = props
  return (
    <div>
      <p>1 {currency} is roughly</p>
      <p className="price">
        <span className="value">{value}</span> CNY
      </p>
    </div>
  )
}

export default Price
