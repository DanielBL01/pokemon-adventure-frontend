import React from 'react';

function Town(props) {
  function handleClick(e) {
    e.preventDefault();
    props.setPage('Grass');
  }

  return (
    <div>
      <div>Welcome to your Town</div>
      <button onClick = {handleClick}>
        Walk Through Tall Grass
      </button>
      <button onClick = {props.handleClick}>
        Pokedex
        </button>
    </div>
  );
}

export default Town;