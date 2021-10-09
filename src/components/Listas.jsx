import React, { useState } from 'react'

const Listas = () => {
    const estadoInicial = [1,2,3,4,5]
    const [lista, setLista] = useState(estadoInicial)
    return (
        <div>
            <h2>Listas</h2>
            {
                lista.map((e, index) => <li key={index}>${e}</li>)
            }
        </div>
    )
}

export default Listas
