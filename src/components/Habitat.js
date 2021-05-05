import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Habitat.module.css';

function Habitat(props) {
  const [about, setAbout] = useState({name: '', weight: 0, height: 0});
  const [stats, setStats] = useState({hp: 0, attack: 0, defense: 0, speed: 0});
  const [types, setTypes] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`/habitat?index=${props.habitat}`);
      const data = result.data[0];
      setAbout({name: data.name, weight: data.weight, height: data.height});
      setStats({hp: data.stats.hp, attack: data.stats.attack, defense: data.stats.defense, speed: data.stats.speed});
      setTypes(data.types);
    }
    fetchData();
  }, [props]);

  function handleClick(e) {
    e.preventDefault();
    props.setPage('Town');
  }

  let display;
  if (about.name !== '') {
    display = 
      <div>
        <h1>A wild <div className={styles.name}>{about.name}</div> appeared!</h1>
        <ul>
          <li>HP: {stats.hp}</li>
          <li>ATTACK: {stats.attack}</li>
          <li>DEFENSE: {stats.defense}</li>
          <li>SPEED: {stats.speed}</li>
        </ul>
        <ul>{types.map(type => <li className={styles.type}>{type}</li>)}</ul>
        <button onClick = {handleClick}>Run</button>
      </div>
  } else {
    display = 
      <div>
        <h1 className={styles.header}>Looking for Wild Pokemon...</h1>
        <button onClick = {handleClick}>Go back to Town</button>
      </div>
  }

  return (
    <div>
      {display}
    </div>
  );
}

export default Habitat;