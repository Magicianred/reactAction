import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Menu from '../Menu'

const App = () => {

  const [inputFrutas, setInputFrutas] = React.useState("")
  const [inputTitulo, setInputTitulo] = React.useState("")

  const frutas = useSelector((state) => state.frutasReducer.frutas)
  const stateTitulo = useSelector((state) => state.tituloReducer.titulo)

  const dispatch = useDispatch()

  const adicionarFruta = (event) => {
    event.preventDefault()

    const objFruta = {
      nome: inputFrutas
    }
    dispatch({ type: "ADICIONAR", value: objFruta })
  }

  const alterarTitulo = (event) => {
    setInputTitulo(event.target.value)
    dispatch({ type: "ALTERAR", value: event.target.value })
  }

  return (
    
      <div className="container">
        <Menu />
        <form className="form-group mt-3">
          <label>Titulo:</label>
          <br />
          <input className="form-control form-control-sm w-50"
            placeholder="Digite o titulo"
            value={inputTitulo}
            onChange={alterarTitulo} />
          <h2 className="mt-3">{stateTitulo}</h2>
        </form>
        <form className="form-group mt-3" onSubmit={adicionarFruta}>
          <input className="form-control form-control-sm w-50"
            placeholder="Digite uma fruta"
            value={inputFrutas}
            onChange={(event) => setInputFrutas(event.target.value)}
           required/>
          <br />
          <button className="btn btn-dark">Enviar</button>
        </form>
        {frutas.map((fruta, index) => {
          return (
            <li className="mt-3 list-group-item list-group-item-info w-50" key={index}> {fruta.nome} </li>
          )
        })
        }
      </div>
  )
}

export default App