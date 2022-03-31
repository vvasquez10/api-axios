import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

function App() {

  const [responseData, setResponseData] = useState([]);
  const [isSubmited, setIsSubmited] = useState(false);


  useEffect( () => {
    axios.get( 'https://pokeapi.co/api/v2/pokemon/?limit=807' )
      .then( response => {
        const listaPokemon = response.data.results.map( (pokemon, index) => {
          return {
            name : pokemon.name,            
          }
        });
        setResponseData( (pokemonsPrev) => listaPokemon );  
        console.log(listaPokemon);    
      });
  }, []);

  return (    
    <div className="App">      
      <form onSubmit={ (e) => {setIsSubmited(true); e.preventDefault()}}>
        <div>
          <input type="submit" value="Fetch them all!" />      
        </div>   
      </form>

      <ul>
      { isSubmited &&  
        responseData.map((pokemon, index) => {
          return (
          <li key={index}>
            {pokemon.name}
          </li>
          )
        })
      }
      </ul>      
    </div>
  );
  }


export default App;
