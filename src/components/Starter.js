import React from 'react';
import axios from 'axios';
import styles from './Starter.module.css';
import { CgPokemon } from 'react-icons/cg';

function Starter(props) {  
  async function handleClick(e) {
    e.preventDefault();
    await axios.post('/partner', {'starter': e.currentTarget.value});
    props.setPage('Town');
  }

  return (
    <div>
      <h1 className={styles.header}>Choose a Starter Pokemon</h1>
      <h3 className={styles.header}>
        <button className={styles.bulbasaur} value='bulbasaur' data-tooltip='Bulbasaur' onClick = {handleClick}>
          <CgPokemon size={100}/>
        </button>
        <button className={styles.charmander} value='charmander' data-tooltip='Charmander' onClick = {handleClick}>
          <CgPokemon size={100}/>
        </button>
        <button className={styles.squirtle} value='squirtle' data-tooltip='Squirtle' onClick = {handleClick}>
          <CgPokemon size={100}/>
        </button>
      </h3>
    </div>
  );
}

export default Starter;