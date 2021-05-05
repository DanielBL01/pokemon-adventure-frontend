import React, { useState } from 'react';
import Starter from './components/Starter';
import Town from './components/Town';
import Habitat from './components/Habitat';
import Pokedex from './components/Pokedex';

function Adventure() {
  const [page, setPage] = useState('Starter');
  const [starter, setStarter] = useState('');
  const [habitat, setHabitat] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function handleModalOpen(e) {
    e.preventDefault();
    setModalIsOpen(true);
  }

  function handleModalClose(e) {
    e.preventDefault();
    setModalIsOpen(false);
  }

  let display;
  switch (page) {
    case 'Town':
      display = 
        <div>
          <Town setPage = {setPage} setHabitat = { setHabitat } handleModalOpen = {handleModalOpen} />
          <Pokedex modalIsOpen = {modalIsOpen} handleModalClose = {handleModalClose} />
        </div>
      break;

    case 'Habitat':
      display = 
        <div>
          <Habitat setPage = {setPage} habitat = { habitat } />
        </div>
      break;

    default:
      display = 
        <div>
          <Starter setPage = {setPage} starter = {starter} setStarter = {setStarter} />
        </div>
      break;
  };

  return (
    <div className='container'>
      {display}
    </div>
  )
}

export default Adventure;