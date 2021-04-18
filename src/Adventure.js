import React, { useState } from 'react';
import Starter from './components/Starter';
import Town from './components/Town';
import Grass from './components/Grass';
import Battle from './components/Battle';
import Pokedex from './components/Pokedex';

function Adventure() {

  const [page, setPage] = useState('Starter');
  // const [starter, setStarter] = useState('');
  // const [pokemon, setPokemon] = useState('');

  switch (page) {
    case 'Town':
      return (
        <div>
          <Town setPage = {setPage} />
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
    case 'Pokedex':
      return (
        <div>
          <Pokedex setPage = {setPage} />
        </div>
      )
    default:
      return (
        <div>
          <Starter setPage = {setPage} />
        </div>
      );
  };
}

export default Adventure;