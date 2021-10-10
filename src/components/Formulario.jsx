import React from 'react'

const Formulario = () => {
    const [fruta, setFruta] = React.useState('')
    const [descripcion, setDescripcion] = React.useState('')
    return (
        <div>
            <h2>Formulario</h2>
            <form>
                <input 
                    type="text"
                    placeholder='Ingrese la fruta'
                    className='form-control mb-2'
                 />
                 <input 
                    type="text"
                    placeholder='Ingrese descripcion'
                    className='form-control mb-2'
                 />
                 <button className="btn btn-primary btn-block">Agregar</button>
            </form>
        </div>
    )
}

export default Formulario
