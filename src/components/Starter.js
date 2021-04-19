import React from 'react';

function Starter(props) {
  function handleClick(e) {
    props.setStarter(e);
    props.setPage('Town');
  }

  return (
    <div>
      <div>Choose a Starter Pokemon...</div>
      <button onClick = {() => handleClick('bulbasaur')}>
        bulbasaur
      </button>
      <button onClick = {() => handleClick('charmander')}>
        charmander
      </button>
      <button onClick = {() => handleClick('squirtle')}>
        squirtle
      </button>
    </div>
  );
}

export default Starter;