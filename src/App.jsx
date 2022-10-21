import imagenRickMorty from './img/rick-morty.png';
import './App.css'
import { useState } from 'react';
import Characters from './components/Characters';

function App() {

  const [characters, setCharacters] = useState(null);
  const [totalPages, setTotalPages] = useState(0);
  const baseUrl = "https://rickandmortyapi.com/api/character";

  const reqApi = async (url) => {
    // Realizando una petición a la API de Rick and Morty
    const api = await fetch (url);
    const charactersApi = await api.json();
    console.log(charactersApi);
    
    setCharacters(charactersApi.results);
    setTotalPages(charactersApi.info.pages);
    

  };

  const links = (max) => {
    let arreglo = [];

    for (let index = 0; index < max; index++) {
      arreglo.push(index + 1);
    }

    return (
      <>
      {
        arreglo.map((item) => (
          <>
          <a href='#' onClick={() => reqApi(baseUrl+"?page="+item)} key={item}>{item}</a>&nbsp;
          </>
        ))
      }
      </>
    );
  }

  return (
    <div className="App">
      <header className='Api-header'>
        <h1 className='title'>Rick & Morty</h1>
        
        {
          characters ? 
          (
            <>
            <Characters characters={characters} setCharacters = {setCharacters} />
            <div>
              <p>Pages:</p>
              {
                totalPages != 0 ? 
                links(totalPages) : (<><p>Not more links</p></>)
              }
            </div>
            </>
          ) 
          : 
          (
            <>
            <img src={imagenRickMorty} alt="Rick & Morty" className='img-home' />
            <br />
            <button onClick={() => reqApi(baseUrl+"?page=1")} className="btn-search" >Buscar Personajes</button>
            </>
          )
        }

      </header>
      
      <br />

    </div>
  )
}

export default App
