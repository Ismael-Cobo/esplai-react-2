import { useState } from "react"
import { Bola } from "./Bola"


export const CirculosAmarillos = () => {

  const [bolas, setBolas] = useState([
    { id: 1, active: false },
    { id: 2, active: false },
    { id: 3, active: false },
    { id: 4, active: false },
    { id: 5, active: false }
  ])


  const onClick = (id) => {
    setBolas(current => current.map(current => current.id === id ? { id: id, active: !current.active } : current))
  }

  return (
    <div style={{ display: 'flex' }}>
      {
        bolas.map(bola => (
          <Bola
            key={bola.id}
            active={bola.active}
            onClick={() => onClick(bola.id)}
          />
        ))
      }
    </div>
  )
}