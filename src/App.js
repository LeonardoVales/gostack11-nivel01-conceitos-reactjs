import React, { useState, useEffect } from 'react'
import './App.css'
import api from './services/api'

import Header from './components/Header'


function App() {

    const [books, setBooks] = useState([])
    
    useEffect( () => {
        api.get('books').then(response => {
            setBooks(response.data)            
        })
    }, [])

    async function handleAddBook() {

        const response = await api.post('books', {            
            name: `Novo Book ${Date.now()}`,
            author: "João Calvino"            
        });
        const book = response.data;
        //cria um novo array copiando o array atual (spred) e adiciona o novo objeto nesse array criado
        setBooks([...books, book])        
    }

    return (
        <> 
            <Header title="Books" />
        
            <ul>
                {books.map(book => <li key={book.id}>{book.name}</li>)}
            </ul>

            <button type="button" onClick={handleAddBook}>Adicionar Book</button>
        </>
    )
}

export default App;