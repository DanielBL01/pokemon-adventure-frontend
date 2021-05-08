import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import styles from './Pokedex.module.css';

function Pokedex(props) {
  Modal.setAppElement('body');
  const [pokedex, setPokedex] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('https://pokemon-adventure-server.herokuapp.com/pokedex');
      setPokedex(result.data);
    }
    fetchData();
  }, []);

  return (
      <div>
        <Modal isOpen={props.pokedexModalIsOpen}>
          <button className={styles.exit} onClick = {props.handlePokedexModalClose}>&times;</button>
          <div className={styles.body}>
            <h1>Pokédex</h1>
            <div className={styles.pokedex_display}>
              {pokedex.map(pokemon => {
                return (
                  <ul className={`${styles.list_display} ${styles.pokedex_entry}`}>
                    <li>NAME: <span className={styles.cap}>{pokemon.name}</span></li>
                    <li>TYPES:</li>
                    <ul className={styles.list_display}>
                      {pokemon.types.map(type => {
                        return <li><span className={styles.cap}>{type}</span></li>
                      })}
                    </ul>
                    <li>HEIGHT: {pokemon.height}</li>
                    <li>WEIGHT: {pokemon.weight}</li>
                    <li>STATS:</li>
                      <ul className={styles.list_display}>
                        <li>HP: {pokemon.stats.hp}</li>
                        <li>ATTACK: {pokemon.stats.attack}</li>
                        <li>DEFENSE: {pokemon.stats.defense}</li>
                        <li>SPEED: {pokemon.stats.speed}</li>
                      </ul>
                  </ul>
                )
              })}
            </div>
          </div>
        </Modal>
      </div>
  );
}

export default Pokedex;