import React, { useState } from 'react';
import Starter from './components/Starter';
import Town from './components/Town';
import Habitat from './components/Habitat';
import Pokedex from './components/Pokedex';
import Pokemon from './components/Pokemon';

function Adventure() {
  const [page, setPage] = useState('Starter');
  const [habitat, setHabitat] = useState(0);
  const [pokedexModalIsOpen, setPokedexModalIsOpen] = useState(false);
  const [pokemonModalIsOpen, setPokemonModalIsOpen] = useState(false);
  const [fighter, setFighter] = useState('');

  function handlePokedexModalOpen(e) {
    e.preventDefault();
    setPokedexModalIsOpen(true);
  }

  function handlePokedexModalClose(e) {
    e.preventDefault();
    setPokedexModalIsOpen(false);
  }

  function handlePokemonModalOpen(e) {
    e.preventDefault();
    setPokemonModalIsOpen(true);
  }

  function handlePokemonModalClose(e) {
    e.preventDefault();
    setPokemonModalIsOpen(false);
  }

  let display;
  if (page === 'Starter') {
    display = 
      <div>
        <Starter setPage = {setPage} setFighter = {setFighter} />
      </div>
  } else if (page === 'Town') {
    display = 
      <div>
        <Town setPage = {setPage} setHabitat = { setHabitat } handlePokedexModalOpen = {handlePokedexModalOpen} handlePokemonModalOpen = {handlePokemonModalOpen} setFighter = {setFighter} />
        <Pokedex pokedexModalIsOpen = {pokedexModalIsOpen} handlePokedexModalClose = {handlePokedexModalClose} />
        <Pokemon pokemonModalIsOpen = {pokemonModalIsOpen} handlePokemonModalClose = {handlePokemonModalClose} fighter = {fighter} setFighter = {setFighter} />
      </div>
  } else if (page === 'Habitat') {
    display = 
      <div>
        <Habitat setPage = {setPage} habitat = { habitat } fighter = {fighter} />
      </div>
  } 

  return (
    <div className='container'>
      {display}
    </div>
  )
}

export default Adventure;