import Menu from './Menu'
import Card from './Card'


function Header(){
    const biografia = "...";
    return(
        <div>

        
        <Card
            nome="Anna Clara"
            biografia={biografia}
            fotoPerfil="avataranna2.jpeg"
          />
          <Menu />
          </div>
    )
}

export default Header