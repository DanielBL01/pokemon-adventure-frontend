import React from 'react';

function Town(props) {
  function handleClick(e) {
    props.setPage(e);
  }

  return (
    <div>
      <div>Welcome to your Town</div>
      <button onClick = {() => handleClick('Grass')}>Walk Through Tall Grass</button>
      <button onClick = {() => handleClick('Pokedex')}>Open Pokedex</button>
    </div>
  );
}

export default Town;