import React, { useState, useEffect } from 'react';
import axios from 'axios';

const delay = Math.floor(Math.random() * (10 - 5) + 5);

function Habitat(props) {
  const [data, setData] = useState({ pokemon_list: [] });

  useEffect(() => {
    const fetchData = async () => {
        const result = await axios.get('/habitat?index=' + props.habitat);
        setData(result.data.pokemon_list);
    };
    fetchData();

    let timer = setTimeout(() => props.setPage('Battle'), delay * 1000);
    return () => {
      clearTimeout(timer);
    }
  }, [props]);

  function handleClick(e) {
    e.preventDefault();
    props.setPage('Town');
  }

  return (
    <div>
      <div>Roaming around Habitat...</div>
      <button onClick = {handleClick}>
        Go back to Town
      </button>
      <div>
          {data.pokemon_list}
      </div>
    </div>
  );
}

export default Habitat;

/*

https://stackoverflow.com/questions/53090432/react-hooks-right-way-to-clear-timeouts-and-intervals

*/