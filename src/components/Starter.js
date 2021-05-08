import React, { useEffect } from 'react';
import axios from 'axios';
import styles from './Starter.module.css';
import { CgPokemon } from 'react-icons/cg';

function Starter(props) {  
  useEffect(() => {
    async function requestDelete() {
      await axios.get('/delete');
    }
    requestDelete();
  }, []);

  async function handleClick(e) {
    e.preventDefault();
    const starter = e.currentTarget.value;
    await axios.post('/partner', {'starter': starter});
    props.setFighter(starter);
    props.setPage('Town');
  }

  return (
    <div>
      <h1 className={styles.header}>Choose a Starter Pokemon</h1>
      <h3 className={styles.header}>
        <button className={`${styles.starter} ${styles.yellow}`} value='pikachu' data-tooltip='Pikachu' onClick = {handleClick}>
          <CgPokemon size={125}/>
        </button>
        <button className={`${styles.starter} ${styles.green}`} value='bulbasaur' data-tooltip='Bulbasaur' onClick = {handleClick}>
          <CgPokemon size={125}/>
        </button>
        <button className={`${styles.starter} ${styles.red}`} value='charmander' data-tooltip='Charmander' onClick = {handleClick}>
          <CgPokemon size={125}/>
        </button>
        <button className={`${styles.starter} ${styles.blue}`} value='squirtle' data-tooltip='Squirtle' onClick = {handleClick}>
          <CgPokemon size={125}/>
        </button>
      </h3>
    </div>
  );
}

export default Starter;