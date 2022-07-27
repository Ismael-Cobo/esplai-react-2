import { CirculosAmarillos } from "./components/circulosAmarillos/CirculosAmarillos"
import { Circulos } from "./components/Ciruclos/Circulos"
import { Counter } from "./components/counter/Counter"
import { CounterWithParams } from "./components/counter/CounterWithParams"
import { CirculosConNumeros } from "./components/circulosNumeros/CirculosConNumeros"

import './App.css'

function App() {

  return (
    <main className="main">
      <CirculosAmarillos />
      <Circulos />
      <Counter />
      <CounterWithParams />
      <CirculosConNumeros />
    </main>
  )

}

export default App
