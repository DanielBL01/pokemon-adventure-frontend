import React from 'react';
import styles from './Starter.module.css';

function Starter(props) {
  function handleClick(e) {
    props.setStarter(e);
    props.setPage('Town');
  }

  return (
    <div>
      <h1 className={styles.header}>Choose a Starter Pokemon</h1>
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