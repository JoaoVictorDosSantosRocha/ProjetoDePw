import './Menu.css'
import React from "react"
import { Link } from 'react-router-dom'

const Menu = props => (
    <aside className="Menu">
        <nav>
            <ul>
                <li> 
                    <Link to="/Inicial">Início</Link>
                </li>
                <li> 
                    <Link to="/Projeto">Projeto</Link>
                </li>
                <li> 
                    <Link to="/Beneficios">Benefícios da música</Link>
                </li>   
                <li> 
                    <Link to="/Chat">Chat</Link>
                </li>                               
                <li> 
                    <Link to="/Detalhes">Detalhes</Link>
                </li>                                 
            </ul>
        </nav>
    </aside>
)
export default Menu
