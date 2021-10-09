import React, { useState } from 'react'

const Listas = () => {
    const estadoInicial = [
        {
            id: 1, texto: 'tarea 1'
        },
        {
            id: 2, texto: 'tarea 2'
        },
        {
            id: 3, texto: 'tarea 3'
        }
    ]
    const [lista, setLista] = useState(estadoInicial)
    return (
        <div>
            <h2>Listas</h2>
            {
                lista.map((e) => <li key={e.id}>${e.texto}</li>)
            }
        </div>
    )
}

export default Listas
