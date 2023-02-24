const Card = (props) => {

    console.log(props.elemento);
  
  return (
    <div>
        <h3>Título de Card: Elemento nº {props.elemento} </h3>

    </div>
  )
}

export default Card