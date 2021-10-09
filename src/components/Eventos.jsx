import React, { Fragment, useState } from 'react'

const Eventos = () => {
    const [texto, setTexto] = useState('Texto desde estado')
    const click = () => {
        console.log('Me diste click')
        setTexto('Cambiando el texto')
    }
    return (
        <Fragment>
            <hr/>
            <h2>{ texto }</h2>
            <button onClick={() => click()}>Click</button>
        </Fragment>
    )
}

export default Eventos
