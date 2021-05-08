import React, {useState, useEffect} from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import styles from './Pokemon.module.css';

function Pokemon(props) {
  const [team, setTeam] = useState([]);
  const [experience, setExperience] = useState({});
  useEffect(() => {
    Modal.setAppElement('body');
    const fetchData = async () => {
      const experienceResult = await axios.get('/experience');
      setExperience(experienceResult.data);
      const result = await axios.get('/team');
      setTeam(result.data);
    }
    fetchData();
  }, [team]); // since we get the team from the backend, we need to re-render through the useEffect

  async function handleClick(e) {
    e.preventDefault();
    const temp = [...team];
    temp.filter(pokemon => {
      return pokemon.name !== e.target.value;
    });
    setTeam(temp);
    await axios.post('/release', {'pokemon': e.target.value});
  }

  function changeFighter(e) {
    e.preventDefault();
    const newFighter = e.target.value;
    props.setFighter(newFighter); // Since fighter setFighter is just a React state, React will re-render upon change
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
                    {team.length > 1 && props.fighter !== pokemon.name && <button value={pokemon.name} className={styles.release} onClick={handleClick}>Release</button>}
                    {props.fighter !== pokemon.name && <button value={pokemon.name} className={styles.set_fighter} onClick={changeFighter}>Set</button>}
                    {props.fighter === pokemon.name && <span className={styles.fighter}>Fighter</span>}
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
                      <li>HP: {pokemon.stats.hp + experience[pokemon.name]}</li>
                      <li>ATTACK: {pokemon.stats.attack + experience[pokemon.name]}</li>
                      <li>DEFENSE: {pokemon.stats.defense + experience[pokemon.name]}</li>
                      <li>SPEED: {pokemon.stats.speed + experience[pokemon.name]}</li>
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