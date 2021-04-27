import React, { useState, useEffect } from 'react';
import axios from 'axios';

const delay = Math.floor(Math.random() * (10 - 5) + 5);

function Habitat(props) {
  const [pokemon, setPokemon] = useState([]);
  const [battle, setBattle] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`/habitat?index=${props.habitat}`);
      setPokemon(result.data);
    }
    fetchData();

    let timer = setTimeout(() => setBattle(true), delay * 1000);
    return () => {
      clearTimeout(timer);
    }
  }, [props]);

  function handleClick(e) {
    e.preventDefault();
    props.setPage('Town');
  }
  
  console.log(pokemon);
  
  return (
    <div>
      {battle === false && <div>
        <div>Searching for Wild Pokémon...</div>
        <button onClick = {handleClick}>
          Go back to Town  
        </button>
      </div>}
      {battle === true && <div>
        <ul>
        {pokemon.map(pokemon => {
          return <li>{pokemon.name}</li>
        })}
        </ul>
        <button onClick = {handleClick}>
          Run! 
        </button>
      </div>}
    </div>
  );
}

export default Habitat;

/*

https://stackoverflow.com/questions/53090432/react-hooks-right-way-to-clear-timeouts-and-intervals

*/