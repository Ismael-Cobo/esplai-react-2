import { useCounter } from "../../hooks/useCounter"

export const CounterWithParams = () => {

  const { counter, decrease, increase } = useCounter(1)

  return (
    <div>
      <h1>Counter entre el 10 y el 0</h1>
      <button onClick={() => increase(1, 10)}>+1</button>
      <div>{counter}</div>
      <button onClick={() => decrease(1, 1)}>-1</button>
    </div>
  )
}
