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

	const agregarElemento = () => {
		setLista(
			[
				...lista, {
					id: 4, texto: 'tarea 4'
				}
			]
		)
	}

	return (
		<div>
			<h2>Listas</h2>
			{
				lista.map((e, index) => <li key={index}>${e.texto}</li>)
			}
			<button onClick={() => agregarElemento()}>Agregar</button>
		</div>
	)
}

export default Listas
