import React, { useState } from 'react';

function Adventure() {

  const [page, setPage] = useState('Starter');
  // const [starter, setStarter] = useState('');
  // const [pokemon, setPokemon] = useState('');

  return (
    <div>
      This Page should render Starter, Town, Grass or Battle...
    </div>
  );
}

export default Adventure;

/*

Adventure is the Parent in the Hierarchy
Adventure will need to render these pages
  - Starter.js
  - Town.js
  - Grass.js
  - Battle.js

Adventure.js will changes pages. Adventure should pass the setPage into Starter which can update Starter -> Town
From Town, if the button "Walk Through Grass" gets clicked then setPage to Grass
From Grass, etc ...
*/