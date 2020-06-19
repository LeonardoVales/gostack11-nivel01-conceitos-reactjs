import React from 'react'

//Em vez de pegar o props direto, faz uma desestruturação e pega somente o title
export default function Header({ title, children }) {
    return(
        <header>
            <h1>{title}</h1>
            
        </header>
    )
}