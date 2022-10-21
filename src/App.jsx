import imagenRickMorty from './img/rick-morty.png';
import './App.css'
import { useState } from 'react';
import Characters from './components/Characters';
import Character from './components/Character';

function App() {

  const [characters, setCharacters] = useState(null);
  const [totalPages, setTotalPages] = useState(0);
  const [dataCharacter, setDataCharacter] = useState(null);
  const baseUrl = "https://rickandmortyapi.com/api/character";

  const reqApi = async (url) => {
    // Realizando una petición a la API de Rick and Morty
    const api = await fetch (url);
    const charactersApi = await api.json();
    //console.log(charactersApi);
    
    setCharacters(charactersApi.results);
    setTotalPages(charactersApi.info.pages);
    setDataCharacter(null);
    

  };

  const searchReqApi = async () => {
    
    let id = document.getElementById("buscador").value;
    
    if(id == "" || id == 0 || id > 826){
      reqApi(baseUrl+"?page=1")
    }else{
      const api = await fetch (baseUrl+`/${id}`)
      const dataApi = await api.json();
      setDataCharacter(dataApi);
      setCharacters(null);
      setTotalPages(null);

      console.log(dataCharacter);
    }

    
    
  }

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
          dataCharacter ? 
          (
          <>
            <Character dataCharacter={dataCharacter} setDataCharacter={setDataCharacter} />
          </>
          ) 
          : 
          characters ? 
          (
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
          )
          :
          (
            <>
            <img src={imagenRickMorty} alt="Rick & Morty" className='img-home' />
            <br />


            <label htmlFor="buscador">Ingrese el ID del personaje: </label>
            <input type="text" name="buscador" id="buscador" min="1" step="1" max="826" />
            <br />
            <button onClick={() => searchReqApi()} className="btn-search" >Buscar Personaje</button>


            <br />
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
