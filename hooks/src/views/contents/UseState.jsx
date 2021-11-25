import './UseState.css'
import React, { useState, useContext } from "react"

import { AppContexto } from '../../data/Store'

const UseState = props => {

    const {contextoNome, setContextoNome} = useContext(AppContexto)

    const [ nome, setNome ] = useState("")
    const [ sobrenome, setSobrenome ] = useState("")
    const [ mensagem, setMensagem ] = useState("")

    function alteraNomeContexto(nome){
        setContextoNome(nome)
    }

    return (
        <div>
            <div className="titulo">
                <h1>Cadastro</h1>
            </div>

            <div className="conteudo">
                <input
                className="campo"
                type="text" value={nome}
                placeholder="Digite seu nome"
                onChange={ e => setNome(e.target.value) }
                />
                <input
                className="campo"
                type="text"
                value={sobrenome}
                placeholder="Digite seu sobrenome"
                onChange={ e => setSobrenome(e.target.value) }
                />

                <button
                className="botao"
                onClick={ () => setMensagem('Cadastro concluído :D !!!') }
                >Ok</button>

                <p className="mensagem">{mensagem}</p>

                <h2>Aqui o usuário se cadastraria para participar do chat </h2>
            </div>
        </div>
    )
}
export default UseState
