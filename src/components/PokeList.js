import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PokeDetails from './PokeDetails'

const PokeList = () => {


    const [list, setList] = useState([])
    const [loading, setLoading] = useState(false)

    const getCharacters = async () => {
        setLoading(true)
        const data = await axios.get('https://swapi.dev/api/people')
        setList(data.data.results)
        setLoading(false)
    }

    useEffect(() => {
        getCharacters()
    }, [])

    if (loading) {
        return (
            <div className='grid grid-cols-3 gap-6 p-10'>
                <p>Cargando....</p>
            </div>
        )
    }

    return (
        <div className='grid grid-cols-3 gap-6 p-10'>
            {
                list.map(person => (
                    <PokeDetails {...person} />
                ))
            }
        </div>
    )
}

export default PokeList