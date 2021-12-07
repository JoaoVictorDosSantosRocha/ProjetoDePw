import './Content.css'
import React from "react"
import { Switch, Route } from 'react-router-dom'
import Projeto from '../../views/contents/Projeto'
import NaoEncontrado from '../../views/contents//NaoEncontrado'
import Beneficios from '../../views/contents/Beneficios'
import Chat from '../../views/contents/Chat'
import Inicial from '../../views/contents/Inicial'
import Detalhes from '../../views/contents/Detalhes'

const Content = props => (
    <main className="Content">
        <Switch>
        <Route exact path="/Inicial">
                <Inicial />
            </Route>
            <Route path="/Projeto">
                <Projeto />
            </Route>
            <Route path="/Beneficios">
                <Beneficios />
            </Route>
            <Route path="/Chat">
                <Chat />
            </Route>    
            <Route path="/Detalhes">
                <Detalhes />
            </Route>
            <Route path="*">
                <NaoEncontrado />
            </Route>            
        </Switch>
    </main>
)
export default Content
