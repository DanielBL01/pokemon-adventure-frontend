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
    // Town is where you choose to view your Pokedex or go to a Habitat to find Pokemon
    case 'Town':
      return (
        <div>
          <Town setPage = {setPage} setHabitat = { setHabitat } handleClick = {handleClick} />
          <div>
            {seen ? <Pokedex handleClick = {handleClick} /> : null}
          </div>
        </div>
      );
    // Habitat is a waiting screen to simulate waiting for a wild Pokemon to appear. There should also be an option to go back to Town
    case 'Habitat':
      return (
        <div>
          <Habitat setPage = {setPage} />
        </div>
      );
    // Battle is where you find a random Pokemon in the Habitat and either Battle or Run Away
    case 'Battle':
      return (
        <div>
          <Battle setPage = {setPage} habitat = { habitat } />
        </div>
      );
    // Starter is where you choose your starter Pokemon when a user first enters
    default:
      return (
        <div>
          <Starter setPage = {setPage} starter = {starter} setStarter = {setStarter} />
        </div>
      );
  };
}

export default Adventure;