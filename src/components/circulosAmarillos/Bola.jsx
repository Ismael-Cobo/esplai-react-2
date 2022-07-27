import './circulos.css'

export const Bola = ({ active, onClick }) => {

  // const [actiu, setActiu] = useState(false)

  // const handleClick = () => setActiu(prev => !prev)

  return (
    <div
      className="redonda"
      style={{ backgroundColor: `${active ? 'red' : 'gray'}` }}
      onClick={onClick}
    />
  )
}