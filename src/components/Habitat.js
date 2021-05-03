import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Habitat(props) {
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`/habitat?index=${props.habitat}`);
      setPokemon(result.data);
    }
    fetchData();
  }, [props]);

  console.log(pokemon);

  function handleClick(e) {
    e.preventDefault();
    props.setPage('Town');
  }

  let display;
  if (pokemon.length > 0) {
    display = <div>
          {pokemon.map(detail => { 
            return (
              <ul>
                <li>{detail.name}</li>
                <li>{detail.height}</li>
                <li>{detail.weight}</li>
                {detail.stats.map(stats => {
                  return (
                    <ul>
                      <li>{stats.hp}</li>
                      <li>{stats.attack}</li>
                      <li>{stats.defense}</li>
                      <li>{stats.speed}</li>
                  </ul>
                  )
                })}
                {detail.types.map(type => {
                  return (
                    <ul>
                      <li>{type}</li>
                    </ul>
                  )
                })}
              </ul> 
            )
          })}
      </div>
  }

  else {
    display = <div>
        Looking for Wild Pokemon...
        <button onClick = {handleClick}>Run!</button>
      </div>
  }

  return (
    <div>
      {display}
    </div>
  );
}

export default Habitat;