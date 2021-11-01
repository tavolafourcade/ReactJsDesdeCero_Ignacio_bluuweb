import React from 'react'

const Formulario = () => {
    const [fruta, setFruta] = React.useState('')
    const [descripcion, setDescripcion] = React.useState('')
    const [listado, setlistado] = React.useState([])
    
    const guardarDatos = (e) => {
        e.preventDefault()
        if(!fruta.trim()){
            console.log('Está vacío fruta')
            return
        }
        if(!descripcion.trim()){
            console.log('Está vacío descripcion')
            return
        }
        setlistado([
            ...listado, {
                nombreFruta: fruta,
                nombreDescripcion: descripcion
            }
        ])
        console.log('procesando datos: '+  fruta + ' ' + descripcion)
        e.target.reset()
        setFruta('')
        setDescripcion('')

    }
    return (
        <div>
            <h2>Formulario</h2>
            <form onSubmit={ guardarDatos}>
                <input 
                    type="text"
                    placeholder='Ingrese la fruta'
                    className='form-control mb-2'
                    onChange={ e => setFruta(e.target.value)}
                 />
                 <input 
                    type="text"
                    placeholder='Ingrese descripcion'
                    className='form-control mb-2'
                    onChange={e => setDescripcion(e.target.value)}
                 />
                 <button className="btn btn-primary btn-block" type='submit'>Agregar</button>
                 <h2>Listado ingresado</h2>
                 <ul>
                    {
                        listado.map((e, index) => <li key={index}>{e.nombreFruta} - {e.nombreDescripcion}</li>)
                    }
                 </ul>
            </form>

        </div>
    )
}

export default Formulario
