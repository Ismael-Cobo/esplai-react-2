import { useState } from "react"

export const useCounter = (defaultValue = 0) => {

  const [counter, setCounter] = useState(defaultValue)

  const increase = (num, max = false) => setCounter(prev => max ? max > prev ? prev + num : prev : prev + num)
  const decrease = (num, min = false) => setCounter(prev => min ? min < prev ? prev - num : prev : prev - num)

  return {
    counter,
    increase,
    decrease
  }
}