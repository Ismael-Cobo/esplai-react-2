import { useState } from "react"
import "../circulosAmarillos/circulos.css"


export const Circulos = () => {

  const [actiu, setActiu] = useState(false)



  return (
    <div style={{ display: 'flex' }}>
      <div className="redonda" style={{ backgroundColor: `${actiu ? 'gray' : 'red'}` }} />
      <div className="redonda" style={{ backgroundColor: `${actiu ? 'gray' : 'red'}` }} />
      <div className="redonda" style={{ backgroundColor: `${actiu ? 'gray' : 'red'}` }} />
      <div className="redonda" style={{ backgroundColor: `${actiu ? 'gray' : 'red'}` }} />
      <div className="redonda" style={{ backgroundColor: `${actiu ? 'gray' : 'red'}` }} />

      <button onClick={() => setActiu(false)}>Color vermell</button>
      <button onClick={() => setActiu(true)}>Color gris</button>
    </div>
  )
}
