import React from 'react';

function Pokedex(props) {
  return (
      <div>
        <span onClick = {props.handleClick}>
          &times;
        </span>
        <div>Pokedex</div>
      </div>
  );
}

export default Pokedex;