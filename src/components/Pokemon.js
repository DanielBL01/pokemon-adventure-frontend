import React, {useState, useEffect} from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import styles from './Pokemon.module.css';

function Pokemon(props) {
  const [team, setTeam] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/team');
      setTeam(result.data);
    }
    fetchData();
  }, [team]); // re-render if team changes

  async function handleClick(e) {
    e.preventDefault();
    const temp = [...team];
    temp.filter(pokemon => {
      return pokemon.name !== e.target.value;
    });
    setTeam(temp);
    await axios.post('/release', {'pokemon': e.target.value});
  }

  return (
      <div>
        <Modal isOpen={props.pokemonModalIsOpen}>
          <button className={styles.exit} onClick = {props.handlePokemonModalClose}>&times;</button>
          <div className={styles.body}>
            <h1>Pokémon</h1>
            <div className={styles.pokemon_display}>
              {team.map(pokemon => {
                return (
                  <ul className={`${styles.list_display} ${styles.pokemon_entry}`}>
                    {team.length > 1 && <button value={pokemon.name} className={styles.release} onClick={handleClick}>Release</button>}
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

export default Pokemon;