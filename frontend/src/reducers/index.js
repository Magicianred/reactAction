import { combineReducers } from 'redux'

const initialState = {
    frutas: []
}

const frutasReducer = (state = initialState, action) => {
    if (action.type === "ADICIONAR") {
        return { frutas: [...state.frutas, { ...action.value }] }
    } else {
        return state
    }
}

const tituloReducer = (state = { titulo: "Lista de Frutas" }, action) => {
    if (action.type === "ALTERAR") {
        return { titulo: action.value }

    } else {
        return state
    }
}

const reducers = combineReducers({ frutasReducer, tituloReducer })

export default reducers