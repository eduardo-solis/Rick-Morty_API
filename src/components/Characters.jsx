import React from 'react'

const Characters = ( {characters, setCharacters} ) => {

    // Metodo para resetear la variable de estado characters
    const resetCharacters = () => {
        setCharacters(null);
    }

    // Agregar un buscador y la paginacion

    return (
        <div>
            <h1>Characters</h1>
            <span onClick={resetCharacters} className='back-home'>Home</span>
            <div className='container-characters'>
                {
                    characters.map( (character, index) => (
                        <>
                        <div className='character-container' key={index}>
                            <div>
                                <img src={character.image} alt={character.name} />
                            </div>
                            <div>
                                <h3>{character.name}</h3>
                                <h6>
                                    { character.status == "Alive" ? 
                                        (
                                            <>
                                            <span className='alive'>Alive</span>
                                            </>
                                        )
                                        :
                                        (
                                            <>
                                            <span className='dead'>Dead</span>
                                            </>
                                        )
                                    }
                                </h6>
                                
                                <p>
                                <span className='text-grey'>Episodes:</span>
                                <span className='text-grey'>{character.episode.length}</span>
                                </p>

                                <p>
                                <span className='text-grey'>Specie:</span>
                                <span className='text-grey'>{character.species}</span>
                                </p>

                            </div>
                        </div>
                        
                        </>
                    ))
                }
            </div>
            <span onClick={resetCharacters} className='back-home'>Home</span>
        </div>
    )
}

export default Characters;