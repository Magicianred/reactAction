import React from 'react'
import { useSelector } from 'react-redux'

const Menu = () => {
    const stateTitulo = useSelector((state) =>
        state.tituloReducer.titulo)
    return (
        <>
            <nav class="navbar navbar-light bg-primary mt-5">
                <div class="container">
                    <h1>{stateTitulo}</h1>
                </div>
            </nav>

        </>
    )
}

export default Menu