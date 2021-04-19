import React, { useState } from 'react';
import Starter from './components/Starter';
import Town from './components/Town';
import Battle from './components/Battle';
import Pokedex from './components/Pokedex';
import Habitat from './components/Habitat';

function Adventure() {

  const [page, setPage] = useState('Starter');
  const [seen, setSeen] = useState(false);
  const [starter, setStarter] = useState('');
  const [habitat, setHabitat] = useState(0);

  function handleClick() {
    setSeen(!seen);
  }

  switch (page) {
    case 'Town':
      return (
        <div>
          <Town setPage = {setPage} setHabitat = { setHabitat } handleClick = {handleClick} />
          <div>
            {seen ? <Pokedex handleClick = {handleClick} /> : null}
          </div>
        </div>
      );
    case 'Habitat':
      return (
        <div>
          <Habitat setPage = {setPage} habitat = { habitat } />
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
          <Starter setPage = {setPage} starter = {starter} setStarter = {setStarter} />
        </div>
      );
  };
}

export default Adventure;