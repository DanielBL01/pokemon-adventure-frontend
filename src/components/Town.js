import React from 'react';

function Town(props) {
  function handleClick(e) {
    props.setHabitat(e);
    props.setPage('Habitat');
  }

  return (
    <div>
      <div>Welcome to your Town</div>
      
      <button onClick = {() => handleClick(1)}>
        Cave
      </button>
      <button onClick = {() => handleClick(2)}>
        Forest
      </button>
      <button onClick = {() => handleClick(3)}>
        Grassland
      </button>
      <button onClick = {() => handleClick(4)}>
        Mountain
      </button>
      <button onClick = {() => handleClick(5)}>
        Rare
      </button>
      <button onClick = {() => handleClick(6)}>
        Rough Terrain
      </button>
      <button onClick = {() => handleClick(7)}>
        Sea
      </button>
      <button onClick = {() => handleClick(8)}>
        Urban
      </button>
      <button onClick = {() => handleClick(9)}>
        Waters Edge
      </button>

      <button onClick = {props.handleClick}>
        Pokedex
        </button>
    </div>
  );
}

export default Town;