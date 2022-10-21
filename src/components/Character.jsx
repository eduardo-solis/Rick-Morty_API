import React from 'react'

const Character = ({ dataCharacter, setDataCharacter }) => {

    const episodios = dataCharacter.episode;
    const resetCharacters = () => {
        setDataCharacter(null);
    }

    return (
        <>
        <span onClick={resetCharacters} className='back-home'>Home</span>
        <h1>{dataCharacter.name}</h1>
        <div>
            <img src={dataCharacter.image} alt={dataCharacter.name} />
        </div>
        <div>
            <h3>Status: {dataCharacter.status}</h3>
            <h3>Specie: {dataCharacter.species}</h3>
            <h3>Episodes: {episodios.length}</h3>
            <h3>Gender: {dataCharacter.gender}</h3>
        </div>
        </>
    )
}

export default Character