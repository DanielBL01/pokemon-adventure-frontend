import React from 'react';
import styles from './Town.module.css';
import { CgPokemon } from 'react-icons/cg';
import { IoMdPhoneLandscape } from "react-icons/io";

function Town(props) {
  function handleClick(e) {
    props.setHabitat(e);
    props.setPage('Habitat');
  }

  return (
    <div>
      <h1 className={styles.header}>Pokémon live in all sorts of habitats. Travel to different locations and catch them all!</h1>
      <h3 className={styles.header}>
        <button className={styles.pokedex} onClick={props.handlePokedexModalOpen}><IoMdPhoneLandscape size={35}/></button>
        <button className={styles.pokemon} onClick={props.handlePokemonModalOpen}><CgPokemon size={35}/></button>
      </h3>
      <div className={styles.options}>
        <button className={`${styles.button} ${styles.cave}`} onClick = {() => handleClick(1)}>Cave</button>
        <button className={`${styles.button} ${styles.forest}`} onClick = {() => handleClick(2)}>Forest</button>
        <button className={`${styles.button} ${styles.grassland}`} onClick = {() => handleClick(3)}>Grassland</button>
        <button className={`${styles.button} ${styles.mountain}`} onClick = {() => handleClick(4)}>Mountain</button>
        <button className={`${styles.button} ${styles.rare}`} onClick = {() => handleClick(5)}>Rare</button>
        <button className={`${styles.button} ${styles.rough_terrain}`} onClick = {() => handleClick(6)}>Rough Terrain</button>
        <button className={`${styles.button} ${styles.sea}`} onClick = {() => handleClick(7)}>Sea</button>
        <button className={`${styles.button} ${styles.urban}`} onClick = {() => handleClick(8)}>Urban</button>
        <button className={`${styles.button} ${styles.water_edge}`} onClick = {() => handleClick(9)}>Waters Edge</button>
      </div>
    </div>
  );
}

export default Town;