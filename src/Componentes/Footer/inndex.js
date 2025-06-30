import './index.css'
import { Link } from 'react-router-dom'

export default function Footer(){
    return(
        <footer>
            <ul className='menu'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/sobre">Sobre</Link></li>
                <li><Link to="/produtos">Produtos</Link></li>
                <li><Link to="/contato">Contato</Link></li>
            </ul>
           
        <p>Desenvolvido por: Anna Clara - 2025</p>
        <p>Sou aluna do colegio SMG cursando desenvolvimento de sistemas no 2° do ensino médio</p>
        </footer>
    )
}