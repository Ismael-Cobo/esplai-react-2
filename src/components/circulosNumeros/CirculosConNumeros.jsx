import { useState } from "react"
import { CirculoConNumeros } from "./CirculoConNumeros"

export const CirculosConNumeros = () => {

  const [numeros, setNumeros] = useState([
    { id: 1, num: Math.floor(Math.random() * 49) },
    { id: 2, num: Math.floor(Math.random() * 49) },
    { id: 3, num: Math.floor(Math.random() * 49) },
  ])

  const handleClick = () => {
    setNumeros(current => current.map(current => ({ id: current.id, num: Math.floor(Math.random() * 49) })))
  }

  return (
    <div style={{ display: 'flex', gap: '1rem' }}>
      {
        numeros.map(num => (
          <CirculoConNumeros key={num.id} num={num.num} />
        ))
      }

      <button onClick={handleClick}>Canvia números</button>
    </div>
  )
}