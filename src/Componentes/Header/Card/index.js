import './style.css'
 
function Card(props){
    return(
        <div>
          <img className='fotoPerfil' src={props.fotoPerfil}/>
          <h1>{props.nome}</h1>
          <p>{props.biografia}</p>
        </div>
    )
}

export default Card;