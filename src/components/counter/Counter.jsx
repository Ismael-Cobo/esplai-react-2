import { useCounter } from "../../hooks/useCounter"

export const Counter = () => {

  const { counter, decrease, increase } = useCounter(1)

  return (
    <div>
      <button onClick={() => increase(1)}>+1</button>
      <div>{counter}</div>
      <button onClick={() => decrease(1)}>-1</button>
    </div>
  )
}
