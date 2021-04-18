import React, { useState } from 'react';
import Starter from './components/Starter';
import Town from './components/Town';
import Grass from './components/Grass';
import Battle from './components/Battle';
import Pokedex from './components/Pokedex';

function Adventure() {

  const [page, setPage] = useState('Starter');
  const [seen, setSeen] = useState(false);

  function handleClick() {
    setSeen(!seen);
  }

  switch (page) {
    case 'Town':
      return (
        <div>
          <Town setPage = {setPage} handleClick = {handleClick} />
          <div>
            {seen ? <Pokedex handleClick = {handleClick} /> : null}
          </div>
        </div>
      );
    case 'Grass':
      return (
        <div>
          <Grass setPage = {setPage} />
        </div>
      );
    case 'Battle':
      return (
        <div>
          <Battle setPage = {setPage} />
        </div>
      );
    default:
      return (
        <div>
          <Starter setPage = {setPage} />
        </div>
      );
  };
}

export default Adventure;