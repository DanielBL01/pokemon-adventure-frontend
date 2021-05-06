import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import styles from './Pokedex.module.css';

function Pokedex(props) {
  const [pokedex, setPokedex] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/pokedex');
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
            {pokedex.map(pokemon => {
              return (
                <ul>
                  <li>NAME: {pokemon.name}</li>
                  <li>HEIGHT: {pokemon.height}</li>
                  <li>WEIGHT: {pokemon.weight}</li>
                </ul>
              )
            })}
          </div>
        </Modal>
      </div>
  );
}

export default Pokedex;