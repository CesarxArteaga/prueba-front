import React from 'react'

const PokeDetails = (props) => {
    return (
        <div
            className='h-96 shadow-md rounded-lg transition duration-150 ease-in-out hover:-translate-y-6'
        >
            <p className='font-bold'>
                {props.name}
            </p>
            <br />
            <div className='h-20 rounded-2xl bg-slate-400 w-20 self-center ' style={{ margin: '0 auto' }} />
            <br />
            <p>
                Altura: {props.height}
            </p>
            <p>
                Peso: {props.mass}
            </p>
            <p>
                Color de Cabello: {props.hair_color}
            </p>
            <p>
                Color de Piel: {props.skin_color}
            </p>
            <p>
                Color de Ojos: {props.skin_color}
            </p>
            <p>
                Año de Nacimiento: {props.birth_year}
            </p>
            <p>
                Genero: {props.gender}
            </p>
        </div>
    )
}

export default PokeDetails