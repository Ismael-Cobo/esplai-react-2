import "../circulosAmarillos/circulos.css"


export const CirculoConNumeros = ({ num }) => {

  return (
    <div
      className="redonda"
      style={{
        backgroundColor: 'pink',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >{num}</div>
  )
}
