import React from 'react';
import Modal from 'react-modal';
import styles from './Pokedex.module.css';

function Pokedex(props) {
  return (
      <div>
        <Modal isOpen={props.pokedexModalIsOpen}>
          <button className={styles.exit} onClick = {props.handlePokedexModalClose}>&times;</button>
          <div className={styles.body}>
            <h1>Pokédex</h1>
            <div>List of all Pokémon you have encountered in your adventure</div>
          </div>
        </Modal>
      </div>
  );
}

export default Pokedex;