import React, {useState, useEffect} from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import styles from './Pokemon.module.css';

function Pokemon(props) {
  const [team, setTeam] = useState([]);
  useEffect(() => {
    Modal.setAppElement('body');
    const fetchData = async () => {
      const result = await axios.get('/team');
      setTeam(result.data);
    }
    fetchData();
  }, []);

  const displayTeam = team.map(pokemon => <li>{pokemon}</li>);
  return (
      <div>
        <Modal isOpen={props.pokemonModalIsOpen}>
          <button className={styles.exit} onClick = {props.handlePokemonModalClose}>&times;</button>
          <div className={styles.body}>
            <h1>Pokémon</h1>
            <ul>{displayTeam}</ul>
          </div>
        </Modal>
      </div>
  );
}

export default Pokemon;